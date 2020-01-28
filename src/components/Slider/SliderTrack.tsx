import React, { FC, useContext } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { SliderContext } from './SliderContext';
import { getSliderStyle } from './styles';

export const SliderTrack: FC<BoxProps> = (props) => {
    const { trackRef, trackPercent } = useContext(SliderContext);
    const { trackStyle } = getSliderStyle(trackPercent);

    return (
        <Box ref={trackRef} {...trackStyle} {...props}>
            {props.children}
        </Box>
    );
};

SliderTrack.displayName = 'SliderTrack';
