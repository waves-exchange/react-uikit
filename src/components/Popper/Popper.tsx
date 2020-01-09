import React, {
    FC,
    useRef,
    useCallback,
    forwardRef,
    useMemo,
    useLayoutEffect,
} from 'react';
import {
    createPopper,
    Options,
    VirtualElement,
    Instance,
} from '@popperjs/core';
import { Box, BoxProps } from '../Box/Box';

type PopperModifierOptions = {
    arrowPadding?: number; // prevents arrow from shifting to very edge of popper(needed when popper has border radius)
    offset?: number[]; // displace a popper from its anchor element
};

type Popper = BoxProps & {
    arrowEl?: Element;
    anchorEl: Element | VirtualElement;
    isOpen?: boolean;
    options?: Partial<Options>;
    modifierOptions?: PopperModifierOptions;
};

export const Popper: FC<Popper> = ({
    arrowEl,
    anchorEl,
    children,
    isOpen,
    options = { placement: 'left', strategy: 'absolute' },
    modifierOptions = { arrowPadding: 5, offset: [0, 8] },
    ...rest
}) => {
    const popperElemRef = useRef<HTMLElement>();
    const popperInstanceRef = useRef<Instance>();

    const mergedOptions = useMemo(
        () => ({
            ...options,
            modifiers: [
                ...(options.modifiers || []),
                {
                    name: 'arrow',
                    enabled: Boolean(arrowEl),
                    options: {
                        padding: modifierOptions.arrowPadding,
                        element: arrowEl,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
            ],
        }),
        [arrowEl, modifierOptions.arrowPadding, options]
    );

    const handlePopperRender = useCallback(() => {
        if (!anchorEl || !popperElemRef.current) {
            return;
        }

        popperInstanceRef.current = createPopper(
            anchorEl,
            popperElemRef.current,
            mergedOptions
        );
    }, [anchorEl, mergedOptions]);

    const handleMountRef = useCallback(
        (node) => {
            popperElemRef.current = node;
            handlePopperRender();
        },
        [handlePopperRender]
    );

    useLayoutEffect(() => {
        return (): void => {
            popperInstanceRef.current && popperInstanceRef.current.destroy();
        };
    });

    if (!isOpen) return null;

    return (
        <Box ref={handleMountRef} {...rest}>
            {children}
        </Box>
    );
};

export const PopperArrow = forwardRef<HTMLDivElement>((props, ref) => {
    return <div x-arrow="" data-popper-arrow={true} ref={ref} />;
});
