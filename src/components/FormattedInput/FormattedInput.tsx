import React from 'react';
import { Input, InputProps } from '../..';
import { getFormattedValue, parseFormattedValue } from './helpers';

type FormattedInputProps = InputProps & {
    onChange: (value: any) => void;
    formatSeparator: string;
    decimals: number;
};

interface FormattedInputState {
    oldIdx: number;
    oldLength: number;
    value: string | string[] | number | undefined;
    formattedValue: string;
}

export class FormattedInput extends React.Component<
    FormattedInputProps,
    FormattedInputState
> {
    private readonly inputRef = React.createRef<HTMLInputElement>();

    constructor(props: FormattedInputProps) {
        super(props);
        const { value, formatSeparator } = props;

        this.state = {
            oldIdx: 0,
            oldLength: 0,
            value,
            formattedValue: getFormattedValue(
                value ? value.toString() : '',
                formatSeparator
            ),
        };
        // const { decimals, formatSeparator, value, onChange, ...rest } = props;
    }

    componentDidUpdate(): void {
        console.log('UPDATE');
        const { formattedValue, oldLength, oldIdx } = this.state;
        const newIdx = Math.max(0, formattedValue.length - oldLength + oldIdx);

        if (this.inputRef && this.inputRef.current) {
            this.inputRef.current.selectionStart = newIdx;
            this.inputRef.current.selectionEnd = newIdx;
        }
    }

    render(): React.ReactNode {
        const { onChange, ...rest } = this.props;
        const { formattedValue } = this.state;

        return (
            <Input
                ref={this.inputRef}
                value={formattedValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                    this.handleChange(event)
                }
                {...rest}
            />
        );
    }

    shouldComponentUpdate(): boolean {
        return true;
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        event.preventDefault();

        const { onChange, decimals, formatSeparator } = this.props;
        const { current: inputNode } = this.inputRef;

        this.setState({
            oldIdx: Number(inputNode?.selectionStart),
            oldLength: Number(inputNode?.value.length),
        });

        if (
            event.target.value ===
            parseFormattedValue(this.state.formattedValue)
        ) {
            return;
        }

        let newValue = parseFormattedValue(event.target.value);

        if (!isNaN(Number(newValue))) {
            const splitted = newValue.split('.');

            if (splitted.length > 1) {
                const afterDot = splitted[1]
                    ? splitted[1].slice(0, decimals)
                    : '';

                newValue = `${splitted[0]}.${afterDot}`;
            }
        } else if (!newValue.trim()) {
            newValue = '';
        } else {
            return;
        }

        this.setState({
            formattedValue: getFormattedValue(newValue, formatSeparator),
        });

        onChange({ value: newValue });
    }
}
