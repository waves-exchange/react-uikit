import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const defaultControlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        width: 20,
        height: 20,
        marginRight: '4px',
        boxSizing: 'border-box',
        border: '1px solid',
        borderRadius: 'circle',
        backgroundColor: 'main.$300',
        borderColor: 'main.$300',
        cursor: 'pointer',
        justifyContent: 'center',
        '::before': {
            content: '""',
            display: 'block',
            transition: '0.3s',
            borderRadius: 'circle',
            width: 12,
            height: 12,
            backgroundColor: 'standard.$0',
            border: '2px solid',
            borderColor: 'standard.$0',
        },
    },
    _hover: {
        backgroundColor: 'main.$200',
        borderColor: 'main.$200',
    },
    _checked: {
        '::before': {
            backgroundColor: 'primary.$300',
        },
    },
    _disabled: {
        backgroundColor: 'main.$600',
        borderColor: 'main.$600',
        cursor: 'default',
    },
    _checkedAndDisabled: {
        '::before': {
            backgroundColor: 'primary.$900',
        },
    },
};
