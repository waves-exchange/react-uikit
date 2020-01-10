import React, { useCallback } from 'react';
import { Text, TTextProps } from '../Text/Text';
import { Box } from '../Box/Box';
import copy from 'copy-to-clipboard';

interface ICopyLabel {
    text: string;
    onCopy?: (text: string, result: boolean) => void;
    TextProps?: TTextProps;
}

export const CopyLabel: React.FC<ICopyLabel> = ({
    text,
    onCopy,
    TextProps,
    ...rest
}) => {
    const onClick = useCallback(() => {
        const result = copy(text);

        if (onCopy) {
            onCopy(text, result);
        }
    }, [text, onCopy]);

    return (
        <Box onClick={onClick} sx={{ cursor: 'pointer' }} {...rest}>
            <Text
                fontSize={13}
                color="primary.$300"
                lineHeight="18px"
                {...TextProps}
            >
                Copy
            </Text>
        </Box>
    );
};
