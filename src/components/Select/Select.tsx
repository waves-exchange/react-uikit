import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Box } from '../Box/Box';

interface ISelectProps {
    HeaderComponent: (opened: boolean) => React.ReactNode;
}

export const Select: React.FC<ISelectProps> = ({
    HeaderComponent,
    children,
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
        <Box ref={element} onClick={onToggleOpened}>
            <Box>{HeaderComponent(opened)}</Box>
            {opened && React.Children.count(children) ? children : null}
        </Box>
    );
};
