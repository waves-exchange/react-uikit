import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

interface ISelectProps {
    HeaderComponent: (opened: boolean) => React.ReactNode;
    isDisabled?: boolean;
}

export const Select: React.FC<ISelectProps & BoxProps> = ({
    HeaderComponent,
    isDisabled = false,
    children,
    ...rest
}) => {
    const [opened, setOpened] = useState<boolean>(false);
    const element = useRef<HTMLDivElement>(null);

    const onToggleOpened = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

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
            onClick={() => (isDisabled ? null : onToggleOpened())}
            {...rest}
        >
            <Box>{HeaderComponent(opened)}</Box>
            {opened && React.Children.count(children) ? children : null}
        </Box>
    );
};
