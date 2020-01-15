import { Placement } from '@popperjs/core';
import React, {
    Children,
    cloneElement,
    FC,
    isValidElement,
    MouseEventHandler,
    ReactNode,
    useCallback,
    useState,
    Ref,
} from 'react';
import { BoxProps } from '../Box/Box';
import { Popper, PopperArrow } from '../Popper/Popper';
import { getPopperArrowStyle } from './styles';

/*
  Usage Notes:
  There are two types of tooltip:

  1. Text tooltip - text passed to "label" prop. To style text tooltip simply 
     pass style props to <Tooltip />
  2. Custom tooltip - react component passed to "label" prop. Styling happens
     within the passed component, no style props should be passed to <Tooltip />

  Tooltip arrow is being styled using combinator + attribute selectors applied
  to parent element of the arrow. See getPopperArrowStyle()
*/

export type TooltipProps = BoxProps & {
    arrowColor?: string;
    arrowSize?: string;
    hasArrow?: boolean;
    label?: (() => ReactNode) | string;
    maxWidth?: string; // max width of popping element
    isOpen?: boolean; // prop for controlled tooltip
    isDefaultOpen?: boolean; // is tooltip open by default. has less priority than isOpen prop
    showDelay?: number;
    offset?: number;
    placement?: Placement;
};

export const Tooltip: FC<TooltipProps> = ({
    arrowColor,
    arrowSize = '8px',
    children,
    hasArrow = false,
    isOpen: isOpenProp,
    isDefaultOpen,
    label,
    maxWidth = '320px',
    showDelay,
    offset = 8,
    placement = 'bottom',
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(isOpenProp || isDefaultOpen);
    const [anchorEl, setAnchorEl] = useState(null);
    const [arrowRef, setArrowRef] = useState(null);
    const [delayTimeout, setDelayTimeout] = useState<number>();

    const anchorRef = useCallback((node) => {
        if (node !== null) {
            setAnchorEl(node);
        }
    }, []);

    const handleMouseEnter: MouseEventHandler = () => {
        if (showDelay && delayTimeout) {
            clearTimeout(delayTimeout);
        }
        setIsOpen(true);
    };

    const handleMouseLeave: MouseEventHandler = () => {
        if (showDelay) {
            setDelayTimeout(
                window.setTimeout(() => setIsOpen(false), showDelay)
            );
        } else {
            setIsOpen(false);
        }
    };

    let child = Children.only(children);

    if (isValidElement(child)) {
        child = cloneElement(child, {
            ref: anchorRef,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
        });
    }

    return (
        <div>
            {child}
            <Popper
                anchorEl={anchorEl as any}
                arrowEl={arrowRef as any}
                isOpen={isOpen}
                options={{ placement }}
                modifierOptions={{
                    offset: [0, offset],
                }}
                sx={getPopperArrowStyle({
                    arrowSize,
                    hasArrow,
                    color: arrowColor,
                })}
                maxWidth={maxWidth}
                {...rest}
            >
                {typeof label === 'function' ? label() : label}
                {hasArrow && (
                    <PopperArrow ref={setArrowRef as Ref<HTMLDivElement>} />
                )}
            </Popper>
        </div>
    );
};
