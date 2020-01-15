import React, { FC, useCallback, createRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { VISUALLY_HIDDEN_CSS } from '../../constants';

type Props = BoxProps & {
    text: string;
    onTextCopy?(copiedText: string): void;
};

export const LightCopy: FC<Props> = ({
    children,
    text,
    onTextCopy,
    ...rest
}) => {
    const ref = createRef<HTMLDivElement>();

    const handleClick = useCallback(() => {
        if (!ref.current) return;

        const p = ref.current;

        const range = new Range();

        range.setStart(p, 0);
        range.setEnd(p, 1);

        const selection = window.getSelection();

        if (!selection) return;

        selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');

        onTextCopy && onTextCopy(text);
    }, [onTextCopy, ref, text]);

    return (
        <Box onClick={handleClick} {...rest}>
            {children}
            <div ref={ref} style={VISUALLY_HIDDEN_CSS}>
                {text}
            </div>
        </Box>
    );
};
