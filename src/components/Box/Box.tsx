import styled, { CSSObject } from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { InterpolationWithTheme } from '@emotion/core';
import { TDefaultTheme } from 'src/interface';
import { ElementType, RefAttributes, HTMLAttributes } from 'react';
import css from '@styled-system/css';
import {
    background,
    BackgroundProps,
    border,
    BorderProps,
    boxShadow,
    BoxShadowProps,
    color,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    grid,
    GridProps,
    layout,
    LayoutProps, overflow, OverflowProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    typography,
    TypographyProps
} from 'styled-system';

export type IBoxProps =
    RefAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    LayoutProps &
    ColorProps &
    SpaceProps &
    BackgroundProps &
    BorderProps &
    GridProps &
    PositionProps &
    BoxShadowProps &
    TypographyProps &
    OverflowProps &
    FlexboxProps &
    { as?: ElementType } &
    { sx?: InterpolationWithTheme<TDefaultTheme> };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sx = (props: any): CSSObject => css(props.sx)(props.theme);

export const Box = styled<'div', IBoxProps>('div', {
    shouldForwardProp
})(
    compose(
        layout,
        color,
        space,
        background,
        border,
        grid,
        position,
        overflow,
        boxShadow,
        typography,
        flexbox
    ),
    sx,
    { boxSizing: 'border-box' }
);
