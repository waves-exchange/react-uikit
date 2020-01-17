import React, { HTMLAttributes, SVGAttributes } from 'react';
import { Box, BoxAsElement, BoxProps } from '../..';
import styled from '@emotion/styled';

interface IProps {
    value: number;
    baseColor?: string;
    valueColor?: string;
    border?: number;
    size?: number;
}

const defaultProps = {
    baseColor: '#80c726',
    valueColor: 'primary.$300',
    border: 12,
    size: 112,
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

export const DonutDiagram: React.FC<IProps> = ({
    value,
    baseColor,
    valueColor,
    border,
    size,
}) => {
    const circumference = Math.PI * (size! - border!);
    const dashValue = circumference * value;

    return (
        <Box
            width={size}
            height={size}
            sx={{
                transform: 'rotate(-90deg)',
            }}
        >
            <Svg
                as="svg"
                viewBox={`0 0 ${size} ${size}`}
                width={size}
                height={size}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Box
                    as="circle"
                    sx={{
                        stroke: baseColor,
                        strokeWidth: border,
                        fill: 'none',
                        cx: size! / 2,
                        cy: size! / 2,
                        r: size! / 2 - border! / 2,
                    }}
                />
                <Box
                    as="circle"
                    sx={{
                        stroke: valueColor,
                        strokeWidth: border,
                        strokeDasharray: `${dashValue}, ${circumference}`,
                        fill: 'none',
                        cx: size! / 2,
                        cy: size! / 2,
                        r: size! / 2 - border! / 2,
                    }}
                />
            </Svg>
        </Box>
    );
};

DonutDiagram.defaultProps = defaultProps;
