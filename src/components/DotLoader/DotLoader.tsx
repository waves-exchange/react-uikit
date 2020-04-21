import * as React from 'react';
import { keyframes } from '@emotion/core';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';

const loaderAnimation = keyframes({
    '0%, 80%, 100%': {
        boxShadow: '0 15px 0 0 #5a81ea, 0 17px 0 0 transparent',
    },
    '40%': {
        boxShadow: '0 15px 0 -15px #5a81ea',
    },
});

type DotProps = {
    size: number;
    animationDelay?: string;
};

const Dot: React.FC<DotProps> = ({ size, animationDelay }) => (
    <Box
        width={size}
        height={size}
        borderRadius="circle"
        mt="-15px"
        sx={{
            animation: `${loaderAnimation} 1.6s infinite ease-in-out`,
            animationFillMode: 'both',
            animationDelay,
        }}
    />
);

type DotLoaderProps = {
    dotSize?: number;
};

export const DotLoader: React.FC<DotLoaderProps> = ({ dotSize = 13 }) => (
    <Flex width={dotSize * 4} height={dotSize} justifyContent="space-between">
        <Dot size={dotSize} />
        <Dot size={dotSize} animationDelay=".16s" />
        <Dot size={dotSize} animationDelay=".32s" />
    </Flex>
);
