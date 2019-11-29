import { ButtonHTMLAttributes, RefAttributes } from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
    compose,
    color,
    space,
    background,
    border,
    position,
    boxShadow,
    typography,
    flexbox,
    ColorProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    BoxShadowProps,
    TypographyProps,
    FlexboxProps,
    variant
} from 'styled-system';

export type TButtonVariant =
    | 'primary'
    | 'secondary'
    | 'action'
    | 'accent';

export type TButtonSize =
    | 'large'
    | 'medium'
    | 'small'
    | 'potty'
    | 'micro';

export type IButtonProps =
    RefAttributes<HTMLDivElement> &
    ButtonHTMLAttributes<HTMLButtonElement> &
    ColorProps &
    SpaceProps &
    BackgroundProps &
    BorderProps &
    PositionProps &
    BoxShadowProps &
    TypographyProps &
    FlexboxProps & {
        variant?: TButtonVariant;
        size?: TButtonSize;
    };

export const Button = styled<'button', IButtonProps>('button', {
    shouldForwardProp
})(compose(
    color,
    space,
    background,
    border,
    position,
    boxShadow,
    typography,
    flexbox
), {
    border: 0,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s'
}, variant({
    scale: 'buttons'
}), variant({
    prop: 'size',
    scale: 'buttonSizes'
}));

Button.defaultProps = {
    type: 'button',
    variant: 'primary',
    size: 'large',
    borderRadius: 'button'
};
