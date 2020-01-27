import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { getPositionStyles } from './styles';

export type Placement = 'top' | 'bottom';

type TSelectProps = BoxProps & {
    renderSelected: (opened: boolean) => React.ReactNode;
    isDisabled?: boolean;
    placement?: Placement;
};

export const Select: React.FC<TSelectProps> = ({
    renderSelected,
    isDisabled = false,
    placement = 'bottom',
    children,
    ...rest
}) => {
    const [opened, setOpened] = useState<boolean>(false);
    const element = useRef<HTMLDivElement>(null);

    const onToggleOpened = useCallback(() => {
        if (isDisabled) {
            return null;
        }
        setOpened(!opened);
    }, [isDisabled, opened]);

    const onClickOut = useCallback((event) => {
        if (element.current && !element.current.contains(event.target)) {
            setOpened(false);
        }
    }, []);

    useEffect(() => {
        if (opened) {
            document.addEventListener('click', onClickOut);
        } else {
            document.removeEventListener('click', onClickOut);
        }

        return () => document.removeEventListener('click', onClickOut);
    }, [onClickOut, opened]);

    const positionStyles = getPositionStyles(placement);

    return (
        <Box
            cursor={isDisabled ? 'default' : 'pointer'}
            position="relative"
            ref={element}
            onClick={onToggleOpened}
            {...rest}
        >
            <Box>{renderSelected(opened)}</Box>

            {opened && React.Children.count(children) ? (
                <Box
                    position="absolute"
                    width="100%"
                    zIndex={10}
                    {...positionStyles}
                >
                    {children}
                </Box>
            ) : null}
        </Box>
    );
};
