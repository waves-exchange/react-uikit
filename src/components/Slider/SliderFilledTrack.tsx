import React, { FC, useContext } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { SliderContext } from './SliderContext';
import { getSliderStyle } from './styles';

export const SliderFilledTrack: FC<BoxProps> = (props) => {
    const { trackPercent } = useContext(SliderContext);
    const { filledTrackStyle } = getSliderStyle(trackPercent);

    return <Box {...filledTrackStyle} {...props} />;
};

SliderFilledTrack.displayName = 'SliderFilledTrack';
