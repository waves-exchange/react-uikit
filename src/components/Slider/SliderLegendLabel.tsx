import React, { useContext, FC } from 'react';
import { range } from 'ramda';
import { Text, TTextProps } from '../Text/Text';
import { SliderContext } from './SliderContext';
import { getValidValue, valueToPercent } from './helpers';
import { Box, BoxProps } from '../Box/Box';
import { getSliderStyle } from './styles';

export type SliderLegendLabelProps = BoxProps & {
    textProps?: TTextProps;
};

export const SliderLegendLabel: FC<SliderLegendLabelProps> = ({
    textProps,
    ...props
}) => {
    const { max, min, step, labelInterval } = useContext(SliderContext);
    const interval = labelInterval || step;
    const amount = (max - min) / interval;
    const gridValues = range(0, amount + 1).map((num: number) =>
        getValidValue(min + num * interval, min, max, step)
    );

    const {
        legendLabelStyle: { boxStyles, textStyles },
    } = getSliderStyle();

    return (
        <Box {...boxStyles} {...props}>
            {gridValues.map((value) => (
                <Text
                    key={value}
                    left={`${valueToPercent(value, min, max)}%`}
                    {...textStyles}
                    {...textProps}
                >
                    {value}
                </Text>
            ))}
        </Box>
    );
};
