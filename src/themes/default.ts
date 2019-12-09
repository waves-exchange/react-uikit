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
        $700: '#6C7406',
        $900: '#4B5364',
        $1000: '#323846',
    },
    standard: {
        $0: '#fff',
        $1000: '#000',
    },
    primary: {
        $100: '', // TODO
        $300: '#5A81EA',
        $500: '#3C6AE4',
        $700: '#2E5DDC',
        $900: '#384770',
    },
    denger: {
        $300: '', // TODO
        $500: '#E5494D',
        $700: '', // TODO
        $900: '', // TODO
    },
    warning: {
        $500: '#F8B700',
    },
    success: {
        $500: '#008B55',
    },
    mix: {
        // TODO
    },
};

const fontSizes = {
    $11: '11px',
    $13: '13px',
    $15: '15px',
    $17: '17px',
    $21: '21px',
    $25: '25px',
    $26: '26px',
};

const space = {
    $0: '0px',
    $3: '3px',
    $5: '5px',
    $10: '10px',
    $20: '20px',
    $30: '30px',
    $40: '40px',
};

const sizes = {
    medium: '48px'
};

const radii = {
    none: 0,
    $2: 2,
    $4: 4,
    $6: 6,
    circle: '9999px',
};

export const defaultTheme = {
    colors,
    // fonts: {
    //     body: '-apple-system, sans-serif',
    //     heading: '-apple-system, sans-serif',
    //     monospace: 'Menlo, Consolas, monospace',
    // },
    fontSizes,
    fontWeights: [100, 300, 400, 500, 700],
    lineHeights: [16, 20, 22, 26, 30, 36],
    space,
    radii,
    borderWidths: [0, 1],
    breakpoints: ['576px', '768px', '992px', '1200px'],
    shadows: {
        default: '0 0 4px rgba(0, 0, 0, 0.125)',
    },
    components: {
        icons: {
            sizes: {
                potty: 10,
                small: 14,
                medium: 18,
                large: 24,
            },
            variants: {
                primary: {
                    fill: colors.primary.$300,
                    hover: {
                        fill: colors.primary.$500,
                    },
                },
            },
        },
        addressAvatar: {
            sizes: {
                small: 27,
                medium: 30,
                large: 45,
            },
        },
        input: {
            sizes: {
                medium: {
                    fontSize: fontSizes.$15,
                    height: sizes.medium,
                    paddingLeft: space.$20,
                    paddingRight: space.$20
                }
            },
            variants: {
                default: {
                    backgroundColor: colors.main.$800,
                    borderColor: colors.main.$500,
                    borderRadius: radii.$4,
                    color: colors.standard.$0,
                    ':hover:not(:disabled)': {
                        borderColor: colors.main.$200
                    },
                    ':focus:not(:disabled)': {
                        borderColor: colors.primary.$300
                    },
                    ':disabled': {
                        backgroundColor: colors.main.$700
                    },
                    '&[aria-invalid="true"]': {
                        borderColor: colors.denger.$500
                    }
                }
            }
        }
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
            background: colors.denger.$300,
            color: colors.standard[0],
            ':hover:not(:disabled)': {
                background: colors.denger.$500,
            },
            ':active': {
                background: colors.denger.$700,
            },
            ':disabled': {
                background: colors.denger.$900,
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
    icons: {
        help: {
            default: colors.basic.$500,
            hovedenger: colors.primary.$300,
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
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
            fontSize: [2, 18],
            color: 'text.dark',
        },
    }
};
