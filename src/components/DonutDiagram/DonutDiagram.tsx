import React, { HTMLAttributes, SVGAttributes } from 'react';
import { Box, BoxAsElement, BoxProps } from '../..';
import styled from '@emotion/styled';

interface IDiagramData {
    id: string;
    value: number;
    color: string;
}

interface IProps {
    data: Array<IDiagramData>;
    baseColor: string;
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
    data,
    baseColor,
    border: borderProp,
    size,
    animationTime,
    easing,
}) => {
    const border: number =
        borderProp === 'none' ? size / 2 : (borderProp as number);
    const circumference = Math.PI * (size - border);
    const sectorsData = data
        .slice()
        .sort(({ value: valueA }, { value: valueB }) => valueA - valueB)
        .reduce((acc, { value: amount, color, id }) => {
            const sum =
                amount * circumference + (acc[acc.length - 1]?.value || 0);

            return [...acc, { value: sum, color, id }];
        }, [] as Array<IDiagramData>);

    return (
        <Box
            size={size}
            sx={{
                transform: 'rotate(-90deg)',
                willChange: 'transform',
            }}
        >
            <Svg
                as="svg"
                viewBox={`0 0 ${size} ${size}`}
                size={size}
                xmlns="http://www.w3.org/2000/svg"
            >
                <Svg
                    as="circle"
                    cx={size / 2}
                    cy={size / 2}
                    r={size / 2 - border / 2}
                    sx={{
                        stroke: baseColor,
                        strokeWidth: border,
                        fill: 'none',
                    }}
                />
                {sectorsData.reverse().map(({ value, color, id }) => (
                    <Svg
                        key={id}
                        as="circle"
                        cx={size / 2}
                        cy={size / 2}
                        r={size / 2 - border / 2}
                        sx={{
                            stroke: color,
                            strokeWidth: border,
                            strokeDasharray: `${value}, ${circumference}`,
                            fill: 'none',
                            transition: `${animationTime! / 100}s ${easing}`,
                        }}
                    />
                ))}
            </Svg>
        </Box>
    );
};

DonutDiagram.defaultProps = defaultProps;
