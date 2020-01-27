import { BoxProps } from '../Box/Box';
import { TTextProps } from '../Text/Text';
import { TooltipProps } from '../Tooltip/Tooltip';

const centeredProps = {
    position: 'absolute' as 'absolute',
    top: '50%',
    sx: {
        transform: `translateY(-50%)`,
    },
};

const rootStyle: BoxProps = {
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
    sx: {
        '&[aria-disabled]': {
            cursor: 'default',
            pointerEvents: 'none',
        },
    },
};

interface Size {
    thumbSize: string;
    trackHeight: string;
}

const getSize = (): Size => ({
    thumbSize: '18px',
    trackHeight: '2px',
});

interface GetStyleProps extends Size {
    trackPercent: number;
}

const getTrackStyle = ({ trackHeight }: GetStyleProps): BoxProps => ({
    ...centeredProps,
    height: trackHeight,
    width: '100%',
    backgroundColor: 'main.$500',
});

const getFilledTrackStyle = ({
    trackHeight,
    trackPercent,
}: GetStyleProps): BoxProps => ({
    ...centeredProps,
    height: trackHeight,
    backgroundColor: 'primary.$500',
    width: `${trackPercent}%`,
    sx: {
        ...centeredProps.sx,
        '[aria-disabled] > &': {
            backgroundColor: 'primary.$900',
        },
    },
});

const getThumbStyle = ({
    trackPercent,
    thumbSize,
}: GetStyleProps): BoxProps => ({
    ...centeredProps,
    left: `calc(${trackPercent}% - ${thumbSize} / 2)`,
    size: thumbSize,
    zIndex: 1,
    backgroundColor: 'main.$800',
    border: '2px solid',
    borderColor: 'primary.$500',
    borderRadius: 'circle',
    transition: 'transform 0.2s',
    sx: {
        ...centeredProps.sx,
        '[aria-disabled] > &': {
            borderColor: 'primary.$900',
        },
    },
});

interface LegendLabelStyle {
    boxStyles: BoxProps;
    textStyles: TTextProps;
}

const legendLabelStyle: LegendLabelStyle = {
    boxStyles: {
        position: 'relative',
    },
    textStyles: {
        variant: 'footnote2',
        color: 'basic.$700',
        position: 'absolute',
        pt: 10,
        sx: {
            transform: 'translateX(-50%)',
        },
    },
};

const tooltipStyle: TooltipProps = {
    arrowColor: 'primary.$500',
    backgroundColor: 'primary.$500',
    px: 9,
    fontSize: '$12',
    lineHeight: '$16',
    borderRadius: '$4',
};

export const getSliderStyle = (trackPercent?: number) => {
    const { trackHeight, thumbSize } = getSize();
    const _props: GetStyleProps = {
        trackHeight,
        thumbSize,
        trackPercent: trackPercent ?? 0,
    };

    return {
        rootStyle,
        trackStyle: getTrackStyle(_props),
        filledTrackStyle: getFilledTrackStyle(_props),
        thumbStyle: getThumbStyle(_props),
        legendLabelStyle,
        tooltipStyle,
    };
};
