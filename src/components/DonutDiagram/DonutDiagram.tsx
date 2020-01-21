import React, { HTMLAttributes, SVGAttributes } from 'react';
import { Box, BoxAsElement, BoxProps } from '../..';
import styled from '@emotion/styled';

interface IProps {
    value: number;
    baseColor: string;
    valueColor: string;
    border: number | 'none';
    size: number;
    animationTime?: number;
    easing?: string;
}

const defaultProps = {
    animationTime: 300,
    easing: 'linear',
};

type SVGBoxProps = BoxProps<SVGElement, HTMLAttributes<SVGElement>> &
    SVGAttributes<SVGElement>;

const Svg = styled(Box as BoxAsElement<'svg', SVGBoxProps>)({
    flexShrink: 0,
    backfaceVisibility: 'hidden',
    '&:not(:root)': {
        overflow: 'hidden',
    },
});

export const DonutDiagram: React.FC<BoxProps & IProps> = ({
    value,
    baseColor,
    valueColor,
    border: borderProp,
    size,
    animationTime,
    easing,
}) => {
    const border: number =
        borderProp === 'none' ? size / 2 : (borderProp as number);
    const circumference = Math.PI * (size - border);
    const dashValue = circumference * value;

    return (
        <Box
            size={size}
            sx={{
                transform: 'rotate(-90deg)',
            }}
        >
            <Svg
                as="svg"
                viewBox={`0 0 ${size} ${size}`}
                size={size}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Box
                    as="circle"
                    sx={{
                        stroke: baseColor,
                        strokeWidth: border,
                        fill: 'none',
                        cx: size / 2,
                        cy: size / 2,
                        r: size / 2 - border / 2,
                    }}
                />
                <Box
                    as="circle"
                    sx={{
                        stroke: valueColor,
                        strokeWidth: border,
                        strokeDasharray: `${dashValue}, ${circumference}`,
                        fill: 'none',
                        cx: size / 2,
                        cy: size / 2,
                        r: size / 2 - border / 2,
                        transition: `${animationTime! / 100}s ${easing}`,
                    }}
                />
            </Svg>
        </Box>
    );
};

DonutDiagram.defaultProps = defaultProps;
