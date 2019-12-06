const colors = {
    main: {
        $100: '#878FA0',
        $200: '#697284',
        $300: '#555D6D',
        $500: '#495060',
        $600: '#3A4050',
        $700: '#363C4A',
        $800: '#292F3C',
        $900: '#19202E',
    },
    basic: {
        $300: '#B7BFD1',
        $500: '#959DAE',
        $700: '#6C7486',
        $900: '#4B5364',
        $1000: '#323846'
    },
    standard: {
        white: '#fff',
        black: '#000'
    },
    blue: {
        $100: '', // TODO
        $300: '#5A81EA',
        $500: '#3C6AE4',
        $700: '#2E5DDC',
        $900: '#384770'
    },
    red: {
        $300: '', // TODO
        $500: '#E5494D',
        $700: '', // TODO
        $900: '' // TODO
    },
    orange: {
        $500: '#F8B700'
    },
    green: {
        $500: '#008B55'
    }
};

const fontSizes = {
    $11: '11px',
    $12: '12px',
    $13: '13px',
    $15: '15px',
    $17: '17px',
    $19: '19px',
    $21: '21px',
    $24: '24px'
};

const space = {
    $0: '0px',
    $4: '4px',
    $8: '8px',
    $16: '16px',
    $24: '24px',
    $32: '32px',
    $48: '48px',
    $64: '64px',
    $96: '96px',
    $128: '128px',
    $256: '256px',
    $512: '512px'
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
    components: {
        icons: {
            sizes: {
                potty: 10,
                small: 14,
                medium: 18,
                large: 24
            },
            variants: {
                primary: {
                    fill: colors.blue.$300,
                    hover: {
                        fill: colors.blue.$500
                    }
                }
            }
        },
        addressAvatar: {
            sizes: {
                small: 27,
                medium: 30,
                large: 45,
            }
        }
    },
    buttons: {
        blue: {
            background: colors.blue.$300,
            color: colors.standard.white,
            ':hover:not(:disabled)': {
                background: colors.blue.$500
            },
            ':active': {
                background: colors.blue.$700
            },
            ':disabled': {
                background: colors.blue.$100
            }
        },
        red: {
            background: colors.red.$300,
            color: colors.standard.white,
            ':hover:not(:disabled)': {
                background: colors.red.$500
            },
            ':active': {
                background: colors.red.$700
            },
            ':disabled': {
                background: colors.red.$900
            }
        },
        transparent: {
            background: 'transparent',
            color: colors.standard.white,
            border: `1px solid ${colors.main.$300}`,
            ':hover:not(:disabled)': {
                border: `1px solid ${colors.main.$200}`
            },
            ':active': {
                border: `1px solid ${colors.main.$100}`
            },
            ':disabled': {
                color: colors.basic.$700,
                border: `1px solid ${colors.main.$500}`
            }
        }
    },
    icons: {
        help: {
            default: colors.basic.$500,
            hovered: colors.blue.$300
        }
    },
    buttonSizes: {
        large: {
            fontSize: fontSizes.$17,
            height: '54px',
            paddingLeft: space.$48,
            paddingRight: space.$48
        },
        medium: {
            fontSize: fontSizes.$15,
            height: '42px',
            paddingLeft: space.$48,
            paddingRight: space.$48
        },
        small: {
            fontSize: fontSizes.$13,
            height: '36px',
            paddingLeft: space.$32,
            paddingRight: space.$32
        },
        potty: {
            fontSize: fontSizes.$12,
            height: '30px',
            paddingLeft: space.$32,
            paddingRight: space.$32
        },
        micro: {
            fontSize: fontSizes.$11,
            height: '22px',
            paddingLeft: space.$16,
            paddingRight: space.$16
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
