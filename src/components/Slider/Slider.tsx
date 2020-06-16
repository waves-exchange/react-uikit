import React, {
    ReactNode,
    MutableRefObject,
    KeyboardEventHandler,
    FocusEventHandler,
    Component,
    createRef,
} from 'react';
import { Box, BoxProps } from '../Box/Box';
import { getSliderStyle } from './styles';
import { calcNewValue, getValidValue, valueToPercent } from './helpers';
import { SliderContextInterface, SliderProvider } from './SliderContext';
import { clamp } from 'ramda';

type MouseOrTouchEvent =
    | MouseEvent
    | TouchEvent
    | React.MouseEvent
    | React.TouchEvent;

type SliderProps = Omit<BoxProps, 'onChange'> & {
    value?: number;
    isDisabled?: boolean;
    max?: number;
    min?: number;
    step?: number;
    labelInterval?: number;
    onChange?: (newValue: number) => void;
    name?: string;
    id?: string;
    hasDefaultTooltip?: boolean;
    children?: ReactNode;
    onMouseDown?: (event: MouseOrTouchEvent) => void;
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    onFocus?: FocusEventHandler<HTMLElement>;
    onBlur?: FocusEventHandler<HTMLElement>;
};

type SliderState = {
    actualValue: number;
    trackRef: MutableRefObject<HTMLDivElement>;
    min: number;
    max: number;
    step: number;
    labelInterval: number;
};

export class Slider extends Component<SliderProps, SliderState> {
    constructor(props: SliderProps) {
        super(props);

        const {
            value,
            max = 100,
            min = 0,
            step = 1,
            labelInterval = 1,
        } = props;

        const trackRef = createRef<HTMLDivElement>() as MutableRefObject<
            HTMLDivElement
        >;

        this.state = {
            actualValue: clamp(min, max, value ? value : min),
            trackRef,
            min,
            max,
            step,
            labelInterval,
        };
    }

    render(): React.ReactNode {
        const {
            trackRef,
            actualValue,
            min,
            step,
            max,
            labelInterval,
        } = this.state;
        const {
            isDisabled,
            onFocus,
            hasDefaultTooltip,
            id,
            onChange,
            children,
            ...rest
        } = this.props;
        const trackPercent = valueToPercent(actualValue, min, max);
        const { rootStyle } = getSliderStyle(trackPercent);

        const context: SliderContextInterface = {
            trackRef,
            trackPercent,
            isDisabled: !!isDisabled,
            onThumbKeyDown: this.handleThumbKeyDown,
            onFocus,
            max,
            min,
            step,
            labelInterval,
            hasDefaultTooltip,
            value: actualValue,
        };

        return (
            <SliderProvider context={context}>
                <Box
                    onMouseDown={this.handleMouseDown}
                    onTouchStart={this.handleMouseDown}
                    onTouchEnd={this.handleMouseUp}
                    onBlur={this.handleBlur}
                    aria-disabled={isDisabled}
                    {...rootStyle}
                    {...rest}
                >
                    {children}
                    <input
                        type="hidden"
                        value={actualValue}
                        name={name}
                        id={id}
                    />
                </Box>
            </SliderProvider>
        );
    }

    componentDidUpdate(prevProps: SliderProps): void {
        const { min, max, value } = this.props;

        if (
            min !== prevProps.min ||
            max !== prevProps.max ||
            value !== prevProps.value
        ) {
            this.setState({
                actualValue: clamp(min, max, value ? value : min) as number,
            });
        }
    }

    componentWillUnmount(): void {
        this.handleMouseUp();
    }

    private readonly getNewValue = (event: MouseOrTouchEvent): number => {
        const { actualValue, trackRef, min, max, step } = this.state;

        if (trackRef.current) {
            const { left, width } = trackRef.current.getBoundingClientRect();
            const { clientX } = 'touches' in event ? event.touches[0] : event;

            return calcNewValue({
                left,
                width,
                clientX,
                min,
                max,
                step,
            });
        }

        return actualValue;
    };

    private readonly updateValue = (newValue: number): void => {
        this.setState({
            actualValue: newValue,
        });

        if (typeof this.props.onChange === 'function') {
            this.props.onChange(newValue);
        }
    };

    private readonly handleMouseMove = (event: MouseOrTouchEvent): void => {
        this.updateValue(this.getNewValue(event));
    };

    private readonly handleMouseUp = (): void => {
        document.body.removeEventListener('mousemove', this.handleMouseMove);
        document.body.removeEventListener('touchmove', this.handleMouseMove);
        document.body.removeEventListener('mouseup', this.handleMouseUp);
        document.body.removeEventListener('touchend', this.handleMouseUp);
    };

    private readonly handleMouseDown = (event: MouseOrTouchEvent): void => {
        const { isDisabled, onMouseDown } = this.props;
        const { actualValue } = this.state;

        if (isDisabled) return;
        if (typeof onMouseDown === 'function') {
            onMouseDown(event);
        }
        event.preventDefault();

        const newValue = this.getNewValue(event);

        if (newValue !== actualValue) {
            this.updateValue(newValue);
        }

        document.body.addEventListener('mousemove', this.handleMouseMove);
        document.body.addEventListener('touchmove', this.handleMouseMove);
        document.body.addEventListener('mouseup', this.handleMouseUp);
        document.body.addEventListener('touchend', this.handleMouseUp);
    };

    private readonly handleThumbKeyDown: KeyboardEventHandler<HTMLElement> = (
        event
    ) => {
        const { actualValue, step, min, max } = this.state;
        const { onKeyDown } = this.props;
        let isUpdateValue = false;
        let newValue;

        switch (event.key) {
            case 'ArrowLeft':
                newValue = actualValue - step;
                isUpdateValue = true;
                break;
            case 'ArrowRight':
                newValue = actualValue + step;
                isUpdateValue = true;
                break;
            default:
                return;
        }

        if (isUpdateValue) {
            event.preventDefault();
            event.stopPropagation();
            this.updateValue(getValidValue(newValue, min, max, step));
        }

        if (typeof onKeyDown === 'function') {
            onKeyDown(event);
        }
    };

    private readonly handleBlur: FocusEventHandler<HTMLElement> = (event) => {
        this.handleMouseUp();
        const { onBlur } = this.props;

        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    };
}
