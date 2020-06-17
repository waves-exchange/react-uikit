import React, { FC, useContext } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { SliderContext } from './SliderContext';
import { getSliderStyle } from './styles';

export const SliderTrack: FC<BoxProps> = (props) => {
    const { trackRef } = useContext(SliderContext);
    const { trackStyle } = getSliderStyle();

    return (
        <Box ref={trackRef} {...trackStyle} {...props}>
            {props.children}
        </Box>
    );
};

SliderTrack.displayName = 'SliderTrack';
