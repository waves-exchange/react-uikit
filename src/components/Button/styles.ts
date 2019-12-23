export const variants = {
    primary: {
        bg: 'primary.$300',
        color: 'standard.$0',
        ':hover:not(:disabled)': {
            bg: 'primary.$500',
        },
        ':active': {
            bg: 'primary.$700',
        },
        ':disabled': {
            bg: 'primary.$900',
            color: 'basic.$700',
        },
    },
    danger: {
        bg: 'danger.$300',
        color: 'standard.$0',
        ':hover:not(:disabled)': {
            bg: 'danger.$500',
        },
        ':active': {
            bg: 'danger.$700',
        },
        ':disabled': {
            bg: 'danger.$900',
            color: 'basic.$700',
        },
    },
    transparent: {
        bg: 'transparent',
        color: 'standard.$1000',
        border: '1px solid',
        borderColor: 'main.$300',
        ':hover:not(:disabled)': {
            border: '1px solid',
            borderColor: 'main.$200',
        },
        ':active': {
            border: '1px solid',
            borderColor: 'main.$100',
        },
        ':disabled': {
            color: 'basic.$700',
            border: '1px solid',
            borderColor: 'main.$500',
        },
    },
};

export const variantSizes = {
    large: {
        fontSize: '$17',
        height: '54px',
        paddingLeft: '$40',
        paddingRight: '$40',
    },
    medium: {
        fontSize: '$15',
        height: '48px',
        paddingLeft: '$40',
        paddingRight: '$40',
    },
    small: {
        fontSize: '$13',
        height: '36px',
        paddingLeft: '$30',
        paddingRight: '$30',
    },
    potty: {
        fontSize: '$15',
        height: '30px',
        paddingLeft: '$30',
        paddingRight: '$30',
    },
    micro: {
        fontSize: '$11',
        height: '22px',
        paddingLeft: '$10',
        paddingRight: '$10',
    },
};
