import React, { Component } from 'react';
import { Input, InputProps } from '../Input/Input';
import { getFormattedValue, parseFormattedValue, handleDots } from './helpers';

type ChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;

type FormattedInputProps = InputProps & {
    onChange?: ChangeFunction;
    formatSeparator: string;
    decimals: number;
    prefix?: string;
    lengthLimit?: number;
};

interface FormattedInputState {
    oldIdx: number;
    oldLength: number;
    value: string | string[] | number | undefined;
    formattedValue: string;
}

export class FormattedInput extends Component<
    FormattedInputProps,
    FormattedInputState
> {
    private readonly inputRef = React.createRef<HTMLInputElement>();
    private dotInput = false;

    constructor(props: FormattedInputProps) {
        super(props);
        const { value, formatSeparator, prefix } = props;

        this.state = {
            oldIdx: 0,
            oldLength: 0,
            value,
            formattedValue: getFormattedValue(
                value ? value.toString() : '',
                formatSeparator,
                prefix
            ),
        };
    }

    render(): React.ReactNode {
        const { onChange, ...rest } = this.props;
        const { formattedValue } = this.state;

        return (
            <Input
                {...rest}
                ref={this.inputRef}
                value={formattedValue}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyboard}
            />
        );
    }

    componentDidUpdate(prevProps: FormattedInputProps): void {
        const { formatSeparator, value, decimals, prefix } = this.props;

        if (value !== prevProps.value || prefix !== prevProps.prefix) {
            this.setState({
                formattedValue: getFormattedValue(
                    value ? handleDots(value.toString(), decimals) : '',
                    formatSeparator,
                    prefix
                ),
            });

            return;
        }

        const { formattedValue, oldLength, oldIdx } = this.state;
        let newIdx = Math.max(0, formattedValue.length - oldLength + oldIdx);

        if (formattedValue[newIdx - 1] === formatSeparator) {
            newIdx = newIdx - 1;
        }

        if (this.inputRef && this.inputRef.current) {
            if (this.inputRef.current.selectionStart === newIdx) {
                return;
            }
            this.inputRef.current.selectionStart = newIdx;
            this.inputRef.current.selectionEnd = newIdx;
        }
    }

    private readonly handleKeyboard = (event: React.KeyboardEvent): void => {
        if (event.key === '.') {
            this.dotInput = true;
        }
    };

    private readonly handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        event.preventDefault();

        const {
            onChange,
            decimals,
            formatSeparator,
            prefix,
            lengthLimit,
        } = this.props;

        const valueLength = event.target.value.split(formatSeparator).join('')
            .length;

        if (lengthLimit && +valueLength > lengthLimit) {
            return;
        }

        this.saveInputCursor();

        if (decimals === 0 && this.dotInput) {
            this.dotInput = false;

            return;
        }

        const eventValue = event.target.value;

        const parsedValue = parseFormattedValue(
            eventValue,
            formatSeparator,
            prefix
        );
        let newValue = '';

        if (!isNaN(Number(parsedValue))) {
            newValue = handleDots(parsedValue, decimals);
        } else {
            return;
        }

        this.setState({
            formattedValue: getFormattedValue(
                newValue,
                formatSeparator,
                prefix
            ),
        });

        if (onChange) {
            this.dispatchChange(onChange, event, newValue);
        }
    };

    private saveInputCursor(): void {
        const { current: inputNode } = this.inputRef;

        this.setState({
            oldIdx: Number(inputNode?.selectionStart),
            oldLength: Number(inputNode?.value.length),
        });
    }

    private dispatchChange(
        onChange: ChangeFunction,
        event: React.ChangeEvent<HTMLInputElement>,
        newValue: string
    ): void {
        const newTarget = {
            ...event.target,
            value: newValue,
        };
        const newNativeTarget = {
            ...event.nativeEvent,
            value: newValue,
        };

        onChange({
            ...event,
            target: newTarget,
            nativeEvent: newNativeTarget,
        });
    }
}
