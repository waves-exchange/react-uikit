import { Interpolation } from '@emotion/core';

type GetPopperArrowStyle = (options: {
    arrowSize: string;
    hasArrow: boolean;
    color?: string;
}) => Interpolation;

export const getPopperArrowStyle: GetPopperArrowStyle = ({
    arrowSize,
    hasArrow,
    color = 'currentColor',
}) => {
    return {
        '[data-popper-arrow]': {
            color,
            border: `${arrowSize} solid`,
            borderColor: 'currentColor',
            position: 'absolute',
        },

        "&[data-popper-placement^='top']": {
            marginBottom: hasArrow ? arrowSize : '0px',
        },

        "&[data-popper-placement^='top'] [data-popper-arrow]": {
            bottom: `calc(${arrowSize} * -2)`,
            borderColor: 'currentColor transparent transparent transparent',
        },

        "&[data-popper-placement^='bottom']": {
            marginTop: hasArrow ? arrowSize : '0px',
        },

        "&[data-popper-placement^='bottom'] [data-popper-arrow]": {
            top: `calc(${arrowSize} * -2)`,
            borderColor: 'transparent transparent currentColor transparent',
        },

        "&[data-popper-placement^='left']": {
            marginRight: hasArrow ? arrowSize : '0px',
        },

        "&[data-popper-placement^='left'] [data-popper-arrow]": {
            right: `calc(${arrowSize} * -2)`,
            borderColor: 'transparent transparent transparent currentColor',
        },

        "&[data-popper-placement^='right']": {
            marginLeft: hasArrow ? arrowSize : '0px',
        },

        "&[data-popper-placement^='right'] [data-popper-arrow]": {
            left: `calc(${arrowSize} * -2)`,
            borderColor: 'transparent currentColor transparent transparent',
        },
    };
};
