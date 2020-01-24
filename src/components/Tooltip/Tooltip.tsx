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
    useEffect,
    useLayoutEffect,
    Ref,
} from 'react';
import { BoxProps } from '../Box/Box';
import { Popper, PopperArrow } from '../Popper/Popper';
import { getPopperArrowStyle } from './styles';
import { path } from 'ramda';

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
    hasMouseHandler?: boolean;
    postPositionCb?: (arrowRef: HTMLDivElement | null) => void;
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
    hasMouseHandler = true,
    postPositionCb,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(isOpenProp || isDefaultOpen);
    const [anchorEl, setAnchorEl] = useState(null);
    const [arrowRef, setArrowRef] = useState(null);
    const [delayTimeout, setDelayTimeout] = useState<number>();

    useEffect(() => {
        if (typeof isOpenProp !== undefined) setIsOpen(isOpenProp);
    }, [isOpenProp]);

    useLayoutEffect(() => {
        postPositionCb && postPositionCb(arrowRef);
    });

    const anchorRef = useCallback((node) => {
        if (node !== null) {
            setAnchorEl(node);
        }
    }, []);

    const handleMouseEnter = useCallback<MouseEventHandler>(() => {
        if (typeof isOpenProp !== 'undefined') return;

        if (hasMouseHandler) {
            if (showDelay && delayTimeout) {
                clearTimeout(delayTimeout);
            }
            setIsOpen(true);
        }
    }, [delayTimeout, hasMouseHandler, isOpenProp, showDelay]);

    const handleMouseLeave = useCallback<MouseEventHandler>(() => {
        if (typeof isOpenProp !== 'undefined') return;

        if (hasMouseHandler) {
            if (showDelay) {
                setDelayTimeout(
                    window.setTimeout(() => setIsOpen(false), showDelay)
                );
            } else {
                setIsOpen(false);
            }
        }
    }, [hasMouseHandler, isOpenProp, showDelay]);

    let child = Children.only(children);

    if (isValidElement(child)) {
        child = cloneElement(child, {
            ref: anchorRef,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
        });
    }

    // код ниже решает проблему с тем, что задизейбленные html элементы
    // не инициируют события мыши, что ломает работу тултипа
    const useDisabledChildHack = Boolean(path(['props', 'disabled'], child));
    const [overlayStyles, setOverlayStyles] = useState({});

    useEffect(() => {
        if (anchorEl && useDisabledChildHack) {
            const {
                width,
                height,
                x,
                y,
            } = (anchorEl as any).getBoundingClientRect();

            setOverlayStyles({
                top: `${y}px`,
                left: `${x}px`,
                width: `${width}px`,
                height: `${height}px`,
            });
        }
    }, [anchorEl, useDisabledChildHack]);

    return (
        <div style={{ position: 'relative' }}>
            {useDisabledChildHack ? (
                <div
                    style={{
                        position: 'fixed',
                        cursor: 'not-allowed',
                        ...overlayStyles,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            ) : null}
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
                zIndex={1}
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
