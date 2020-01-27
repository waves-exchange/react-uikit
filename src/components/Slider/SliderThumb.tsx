import React, { FC, useContext } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Tooltip } from '../Tooltip/Tooltip';
import { SliderContext } from './SliderContext';
import { getSliderStyle } from './styles';

export const SliderThumb: FC<BoxProps> = (props) => {
    const {
        value,
        isDisabled,
        hasDefaultTooltip,
        trackPercent,
        onThumbKeyDown: onKeyDown,
        onFocus,
    } = useContext(SliderContext);
    const { thumbStyle, tooltipStyle } = getSliderStyle(trackPercent);

    return (
        <Box
            tabIndex={isDisabled ? undefined : 0}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            {...thumbStyle}
            {...props}
        >
            {props.children}
            {hasDefaultTooltip ? (
                <Tooltip
                    label={String(value)}
                    isOpen={true}
                    placement="top"
                    hasArrow={true}
                    {...tooltipStyle}
                >
                    <Box />
                </Tooltip>
            ) : null}
        </Box>
    );
};

SliderThumb.displayName = 'SliderThumb';
