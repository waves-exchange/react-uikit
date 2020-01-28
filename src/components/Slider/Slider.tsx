import React, {
    FC,
    useCallback,
    useRef,
    useState,
    useEffect,
    ReactNode,
    MutableRefObject,
    KeyboardEventHandler,
    FocusEventHandler,
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

export const Slider: FC<SliderProps> = ({
    value,
    onChange,
    onKeyDown,
    onFocus,
    onBlur,
    onMouseDown,
    isDisabled,
    max = 100,
    min = 0,
    step = 1,
    labelInterval = 1,
    children,
    name,
    id,
    hasDefaultTooltip,
    ...rest
}) => {
    const [actualValue, setActualValue] = useState(
        clamp(min, max, value ? value : min)
    );

    useEffect(() => {
        setActualValue(clamp(min, max, value ? value : min));
    }, [value, min, max]);

    const trackRef = useRef<HTMLDivElement>() as MutableRefObject<
        HTMLDivElement
    >;

    const getNewValue: (event: MouseOrTouchEvent) => number = (event) => {
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

    const updateValue = useCallback(
        (newValue: number) => {
            setActualValue(newValue);
            if (typeof onChange === 'function') {
                onChange(newValue);
            }
        },
        [onChange]
    );

    const handleMouseMove = (event: MouseOrTouchEvent): void => {
        updateValue(getNewValue(event));
    };

    const handleMouseUp = (): void => {
        document.body.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('touchmove', handleMouseMove);
        document.body.removeEventListener('mouseup', handleMouseUp);
        document.body.removeEventListener('touchend', handleMouseUp);
    };

    const handleMouseDown = (event: MouseOrTouchEvent): void => {
        if (isDisabled) return;
        if (typeof onMouseDown === 'function') {
            onMouseDown(event);
        }
        event.preventDefault();

        const newValue = getNewValue(event);

        if (newValue !== actualValue) {
            updateValue(newValue);
        }

        document.body.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('touchmove', handleMouseMove);
        document.body.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('touchend', handleMouseUp);
    };

    const handleThumbKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
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
            updateValue(getValidValue(newValue, min, max, step));
        }

        if (typeof onKeyDown === 'function') {
            onKeyDown(event);
        }
    };

    const handleBlur: FocusEventHandler<HTMLElement> = (event) => {
        handleMouseUp();
        if (typeof onBlur === 'function') {
            onBlur(event);
        }
    };

    const trackPercent = valueToPercent(actualValue, min, max);
    const { rootStyle } = getSliderStyle(trackPercent);

    const context: SliderContextInterface = {
        trackRef,
        trackPercent,
        isDisabled: !!isDisabled,
        onThumbKeyDown: handleThumbKeyDown,
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
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                onMouseLeave={handleMouseUp}
                onTouchEnd={handleMouseUp}
                onBlur={handleBlur}
                aria-disabled={isDisabled}
                {...rootStyle}
                {...rest}
            >
                {children}
                <input type="hidden" value={actualValue} name={name} id={id} />
            </Box>
        </SliderProvider>
    );
};

Slider.displayName = 'Slider';
