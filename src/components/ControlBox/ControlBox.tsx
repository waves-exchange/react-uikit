import styled, { CSSObject } from '@emotion/styled';
import css from '@styled-system/css';
import { Flex } from '../Flex/Flex';

export interface IControlBoxStyles {
    baseStyles?: CSSObject;
    _focus?: CSSObject;
    _hover?: CSSObject;
    _invalid?: CSSObject;
    _disabled?: CSSObject;
    _checked?: CSSObject;
    _child?: CSSObject;
    _checkedAndChild?: CSSObject;
    _checkedAndDisabled?: CSSObject;
    _checkedAndDisabledHover?: CSSObject;
    _checkedAndFocus?: CSSObject;
    _checkedAndHover?: CSSObject;
}

type TProps = IControlBoxStyles & {
    type?: 'checkbox' | 'radio';
};

export const ControlBox = styled(Flex)<TProps>(
    ({
        type = 'checkbox',
        _hover,
        _invalid,
        _disabled,
        _focus,
        _checked,
        _child = { opacity: 0 },
        _checkedAndChild = { opacity: 1 },
        _checkedAndDisabled,
        _checkedAndDisabledHover,
        _checkedAndFocus,
        _checkedAndHover,
    }: TProps) => {
        /* eslint-disable max-len */
        const checkedAndDisabled = `input[type=${type}]:checked:disabled + &, input[type=${type}][aria-checked=mixed]:disabled + &`;
        const checkedAndHover = `input[type=${type}]:checked:hover:not(:disabled) + &, input[type=${type}][aria-checked=mixed]:hover:not(:disabled) + &`;
        const checkedAndFocus = `input[type=${type}]:checked:focus + &, input[type=${type}][aria-checked=mixed]:focus + &`;
        const disabled = `input[type=${type}]:disabled + &`;
        const focus = `input[type=${type}]:focus + &`;
        const hover = `input[type=${type}]:hover:not(:disabled):not(:checked) + &`;
        const checkedAndDisabledHover = `input[type=${type}]:hover:disabled:checked + &`;
        const checked = `input[type=${type}]:checked + &, input[type=${type}][aria-checked=mixed] + &`;
        const invalid = `input[type=${type}][aria-invalid=true] + &`;

        return css({
            [focus]: _focus,
            [hover]: _hover,
            [disabled]: _disabled,
            [invalid]: _invalid,
            [checkedAndDisabled]: _checkedAndDisabled,
            [checkedAndFocus]: _checkedAndFocus,
            [checkedAndHover]: _checkedAndHover,
            [checkedAndDisabledHover]: _checkedAndDisabledHover,
            ...{ '& > *': _child },
            [checked]: {
                ..._checked,
                '& > *': _checkedAndChild,
            },
        });
    }
);

ControlBox.displayName = 'ControlBox';

ControlBox.defaultProps = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    'aria-hidden': 'true',
};
