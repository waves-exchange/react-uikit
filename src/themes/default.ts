import {
    colors,
    fontSizes,
    fontWeights,
    space,
    sizes,
    lineHeights,
    radii,
} from 'themes/constants';

export const defaultTheme = {
    colors,
    // fonts: {
    //     body: '-apple-system, sans-serif',
    //     heading: '-apple-system, sans-serif',
    //     monospace: 'Menlo, Consolas, monospace',
    // },
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    sizes,
    radii,
    borderWidths: [0, 1],
    breakpoints: ['576px', '768px', '992px', '1200px'],
    shadows: {
        default: '0 0 4px rgba(0, 0, 0, 0.125)',
    },
    components: {
        addressAvatar: {
            sizes: {
                small: 27,
                medium: 30,
                large: 45,
            },
        },
    },
    buttons: {
        primary: {
            background: colors.primary.$300,
            color: colors.standard[0],
            ':hover:not(:disabled)': {
                background: colors.primary.$500,
            },
            ':active': {
                background: colors.primary.$700,
            },
            ':disabled': {
                background: colors.primary.$100,
            },
        },
        danger: {
            background: colors.danger.$300,
            color: colors.standard[0],
            ':hover:not(:disabled)': {
                background: colors.danger.$500,
            },
            ':active': {
                background: colors.danger.$700,
            },
            ':disabled': {
                background: colors.danger.$900,
            },
        },
        transparent: {
            background: 'transparent',
            color: colors.standard[0],
            border: `1px solid ${colors.main.$300}`,
            ':hover:not(:disabled)': {
                border: `1px solid ${colors.main.$200}`,
            },
            ':active': {
                border: `1px solid ${colors.main.$100}`,
            },
            ':disabled': {
                color: colors.basic.$700,
                border: `1px solid ${colors.main.$500}`,
            },
        },
    },
    buttonSizes: {
        large: {
            fontSize: fontSizes.$17,
            height: '54px',
            paddingLeft: space.$40,
            paddingRight: space.$40,
        },
        medium: {
            fontSize: fontSizes.$15,
            height: '42px',
            paddingLeft: space.$40,
            paddingRight: space.$40,
        },
        small: {
            fontSize: fontSizes.$13,
            height: '36px',
            paddingLeft: space.$30,
            paddingRight: space.$30,
        },
        potty: {
            fontSize: fontSizes.$15,
            height: '30px',
            paddingLeft: space.$30,
            paddingRight: space.$30,
        },
        micro: {
            fontSize: fontSizes.$11,
            height: '22px',
            paddingLeft: space.$10,
            paddingRight: space.$10,
        },
    },
};
