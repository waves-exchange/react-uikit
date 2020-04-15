import React from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';

const statusLabelVariants = {
    info: {
        color: 'primary.$300',
        backgroundColor: 'primary.$300',
    },
    success: {
        color: 'success.$300',
        backgroundColor: 'success.$300',
    },
    warning: {
        color: 'warning.$500',
        backgroundColor: 'warning.$500',
    },
    error: {
        color: 'danger.$300',
        backgroundColor: 'danger.$300',
    },
};

const statusLabelSize = {
    small: {
        borderRadius: '$2',
        px: 8,
        py: 4,
        fontSize: 9,
        lineHeight: 1,
    },
    medium: {
        borderRadius: '$4',
        px: 8,
        py: 4,
        fontSize: '$13',
        lineHeight: '$16',
    },
};

export type TStatusLabel = TFlexProps & {
    variant?: keyof typeof statusLabelVariants;
    size?: keyof typeof statusLabelSize;
    text?: string;
};

export const StatusLabel: React.FC<TStatusLabel> = ({
    variant = 'info',
    size = 'small',
    text,
    children,
    ...rest
}) => {
    return (
        <Flex
            display="inline-flex"
            position="relative"
            alignItems="center"
            color={statusLabelVariants[variant].color}
            overflow="hidden"
            {...statusLabelSize[size]}
            {...rest}
        >
            {rest.backgroundColor ? null : (
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    opacity={0.1}
                    backgroundColor={
                        statusLabelVariants[variant].backgroundColor
                    }
                />
            )}
            {text ? (
                <Text
                    fontSize={statusLabelSize[size].fontSize}
                    lineHeight={statusLabelSize[size].lineHeight}
                    color={statusLabelVariants[variant].color}
                    sx={{ textTransform: 'uppercase' }}
                >
                    {text}
                </Text>
            ) : null}
            {children}
        </Flex>
    );
};
