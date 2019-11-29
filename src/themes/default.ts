const colors = {
    text: '#444',
    background: '#fff',
    white: '#fff',
    grays: {
        200: '#dae1e9',
        500: '#9ba6b2',
        700: '#4e5c6e'
    },
    blues: {
        100: '#c4d0ef',
        200: '#bacaf4',
        400: '#1f5af6',
        500: '#1f5af6',
        600: '#2051d3',
        700: '#1a4ac8',
        800: '#0d3dba'
    },
    red: {
        200: '#f4b1a5',
        400: '#e5494d',
        600: '#d1383c',
        700: '#b72125'
    }
};

const fontSizes = {
    12: '12px',
    13: '13px',
    15: '15px',
    17: '17px',
    19: '19px',
    21: '21px',
    24: '24px'
};

const space = {
    0: '0px',
    4: '4px',
    8: '8px',
    16: '16px',
    24: '24px',
    32: '32px',
    48: '48px',
    64: '64px',
    96: '96px',
    128: '128px',
    256: '256px',
    512: '512px'
};

const radii = {
    default: 0,
    button: '4px',
    circle: '9999px',
};

export const defaultTheme = {
    colors,
    fonts: {
        body: '-apple-system, sans-serif',
        heading: '-apple-system, sans-serif',
        monospace: 'Menlo, Consolas, monospace',
    },
    fontSizes,
    fontWeights: {},
    lineHeights: {},
    space,
    radii,
    shadows: {
        default: '0 0 4px rgba(0, 0, 0, 0.125)',
    },
    variants: {
        icon: {},
        button: {}
    },
    buttons: {
        primary: {
            background: colors.blues[400],
            color: colors.white,
            ':hover:not(:disabled)': {
                background: colors.blues[600]
            },
            ':active': {
                background: colors.blues[700]
            },
            ':disabled': {
                background: colors.blues[100]
            }
        },
        secondary: {
            background: colors.white,
            color: colors.grays[500],
            border: `1px solid ${colors.grays[200]}`,
            ':hover:not(:disabled)': {
                borderColor: colors.grays[500],
                color: colors.grays[700]
            },
            ':disabled': {
                opacity: '0.4'
            }
        },
        action: {
            background: colors.white,
            color: colors.grays[500],
            boxShadow: '0 2px 4px 0 rgba(218, 225, 233, 0.5)',
            ':hover:not(:disabled)': {
                boxShadow: '0 2px 4px 0 rgba(199, 210, 222, 0.6)',
                color: colors.grays[700]
            },
            ':disabled': {
                opacity: '0.9'
            }
        },
        accent: {
            background: colors.red[400],
            color: colors.white,
            ':hover:not(:disabled)': {
                background: colors.red[600]
            },
            ':active': {
                background: colors.red[700]
            },
            ':disabled': {
                background: colors.red[200]
            }
        }
    },
    buttonSizes: {
        large: {
            fontSize: fontSizes[17],
            height: '54px',
            paddingLeft: space[48],
            paddingRight: space[48]
        },
        medium: {
            fontSize: fontSizes[15],
            height: '42px',
            paddingLeft: space[48],
            paddingRight: space[48]
        },
        small: {
            fontSize: fontSizes[13],
            height: '36px',
            paddingLeft: space[32],
            paddingRight: space[32]
        },
        potty: {
            fontSize: fontSizes[12],
            height: '30px',
            paddingLeft: space[32],
            paddingRight: space[32]
        },
        micro: {
            fontSize: fontSizes[11],
            height: '22px',
            paddingLeft: space[16],
            paddingRight: space[16]
        }
    },
    breakpoints: ['600px', '960px', '1140px'],
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
            fontSize: [2, 18],
            color: 'text.dark',
        },
    },
};
