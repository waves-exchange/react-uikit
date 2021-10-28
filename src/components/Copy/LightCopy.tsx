import React, { FC, createRef, useCallback } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { VISUALLY_HIDDEN_CSS } from '../../constants';

type Props = BoxProps & {
    text: string;
    onTextCopy?(copiedText: string): void;
};

const hasNativeCopy = (): boolean => {
    return !!navigator?.clipboard?.writeText;
};

const nativeCopy = (text: string): Promise<void> =>
    navigator.clipboard.writeText(text);

const oldCopy = (text: string, ref: Node, cb?: (txt: string) => void): void => {
    if (!ref || !text) {
        return;
    }

    const range = new Range();

    range.setStart(ref, 0);
    range.setEnd(ref, 1);

    const selection = window.getSelection();

    if (!selection) return;

    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    if (typeof cb === 'function') {
        cb(text);
    }
};

const copy = (text: string, ref: Node, cb?: (text: string) => any): void => {
    const onCopy = () => {
        if (typeof cb === 'function') {
            cb(text);
        }
    };

    if (hasNativeCopy()) {
        nativeCopy(text)
            .then(onCopy)
            .catch((e) => {
                console.warn(e);
            });
    } else {
        oldCopy(text, ref, cb);
    }
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

        copy(text, p, onTextCopy);
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
