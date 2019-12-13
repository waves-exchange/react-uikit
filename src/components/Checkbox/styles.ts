import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const defaultControlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        userSelect: 'none' as 'none',
        border: '1px solid',
        color: 'white',
        borderColor: 'main.$500',
        backgroundColor: 'main.$800',
        borderRadius: '$4',
        transition: 'all 120ms, background-color 120ms, box-shadow 250ms',
        width: '18px',
        height: '18px',
    },
    _hover: {
        borderColor: 'main.$200',
    },
    _child: {
        opacity: 0,
        width: '100%',
        height: '100%',
    },
    _checkedAndChild: {
        opacity: 1,
    },
    _checked: {
        backgroundColor: 'primary.$300',
        borderColor: 'primary.$300',
        ':hover': {
            borderColor: 'main.$200',
        },
    },
    _checkedAndHover: {
        borderColor: 'primary.$300',
    },
    _checkedAndDisabled: {
        backgroundColor: 'primary.$900',
        borderColor: 'primary.$900',
    },
    _checkedAndDisabledHover: {
        borderColor: 'primary.$900',
    },
    _disabled: {
        borderColor: 'main.$500',
        backgroundColor: 'main.$1000',
    },
};
