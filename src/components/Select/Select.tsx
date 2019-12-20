import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

type TSelectProps = BoxProps & {
    renderSelected: (opened: boolean) => React.ReactNode;
    isDisabled?: boolean;
};

export const Select: React.FC<TSelectProps> = ({
    renderSelected,
    isDisabled = false,
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

    return (
        <Box
            cursor={isDisabled ? 'default' : 'pointer'}
            ref={element}
            onClick={onToggleOpened}
            {...rest}
        >
            <Box>{renderSelected(opened)}</Box>

            {opened && React.Children.count(children) ? (
                <Box position="relative" width="100%">
                    <Box position="absolute" width="100%">
                        {children}
                    </Box>
                </Box>
            ) : null}
        </Box>
    );
};
