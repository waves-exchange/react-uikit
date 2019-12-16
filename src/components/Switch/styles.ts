import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const controlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        width: 38,
        height: 18,
        boxSizing: 'content-box',
        border: '1px solid',
        borderRadius: 10,
        backgroundColor: 'main.$300',
        borderColor: 'main.$300',
        cursor: 'pointer',
        justifyContent: 'initial',
        '::before': {
            content: '""',
            display: 'block',
            transition: '.3s',
            borderRadius: 'circle',
            width: 18,
            height: 18,
            backgroundColor: 'main.$800',
        },
    },
    _hover: {
        backgroundColor: 'main.$200',
        borderColor: 'main.$200',
    },
    _checked: {
        backgroundColor: 'primary.$300',
        borderColor: 'primary.$300',
        '::before': {
            transform: 'translateX(20px)',
        },
    },
    _disabled: {
        backgroundColor: 'main.$600',
        borderColor: 'main.$600',
        cursor: 'not-allowed',
    },
    _checkedAndDisabled: {
        backgroundColor: 'primary.$900',
        borderColor: 'primary.$900',
    },
};
