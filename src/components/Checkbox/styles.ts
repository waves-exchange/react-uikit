import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const defaultControlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        userSelect: 'none' as 'none',
        border: '1px solid',
        rounded: 'md',
        color: 'white',
        borderColor: 'main.$500',
        backgroundColor: 'main.$800',
        borderRadius: 'button',
        transition: 'all 120ms, background-color 120ms, box-shadow 250ms',
    },
    _hover: {
        borderColor: 'main.$200',
    },
    _checked: {
        backgroundColor: 'blue.$300',
        ':hover': {
            borderColor: 'main.$200',
        }
    },
    _checkedAndDisabled: {
        backgroundColor: 'blue.$900',
        borderRadius: 2
    },
    _disabled: {
        backgroundColor: '#353b4a',
    },
    _focus: {
        borderColor: 'main.$200',
    }
};