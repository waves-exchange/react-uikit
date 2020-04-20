import * as React from 'react';
import { Box, BoxProps } from '../Box/Box';
import { loaderAnimation } from './keyframes';

export type TDotLoader = BoxProps & {};

const loaderDotSize = 13;

const dotStyle = {
    top: -15,
    width: loaderDotSize,
    height: loaderDotSize,
    borderRadius: 'circle',
    display: 'inline-block',
};

export const DotLoader: React.FC<TDotLoader> = () => {
    return (
        <Box
            position="absolute"
            left="50%"
            top="50%"
            width={loaderDotSize * 4}
            height={loaderDotSize}
            sx={{ transform: 'translate(-25%, -50%)' }}
        >
            <Box
                position="absolute"
                left="0px"
                {...dotStyle}
                sx={{
                    animation: `${loaderAnimation} 1.6s infinite ease-in-out`,
                    animationFillMode: 'both',
                    animationDelay: '.16s',
                }}
                css={{
                    backgroundColor: 'hotpink',
                    '&:hover': {
                        color: 'lightgreen',
                    },
                }}
            />
            <Box
                position="absolute"
                left="0"
                {...dotStyle}
                sx={{
                    animation: `${loaderAnimation} 1.6s infinite ease-in-out`,
                    animationFillMode: 'both',
                    animationDelay: '0',
                    transform: 'translateX(-20px)',
                }}
            />
            <Box
                position="absolute"
                left="0"
                {...dotStyle}
                sx={{
                    animation: `${loaderAnimation} 1.6s infinite ease-in-out`,
                    animationFillMode: 'both',
                    animationDelay: '.32s',
                    transform: 'translateX(20px)',
                }}
            />
        </Box>
    );
};
