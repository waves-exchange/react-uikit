import styled, { WithTheme } from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { InterpolationWithTheme } from '@emotion/core';
import { TDefaultTheme } from 'src/interface';
import { ElementType, RefAttributes, HTMLAttributes } from 'react';
import css, { SystemStyleObject } from '@styled-system/css';
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
    LayoutProps,
    overflow,
    OverflowProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    typography,
    TypographyProps,
    styleFn,
} from 'styled-system';

export type IBoxProps<T = HTMLDivElement> = RefAttributes<T> &
    HTMLAttributes<T> &
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
    FlexboxProps & { as?: ElementType } & {
        sx?: InterpolationWithTheme<TDefaultTheme>;
    };

const sx: styleFn = (
    props: WithTheme<{ sx: SystemStyleObject }, TDefaultTheme>
) => css(props.sx)(props.theme);

export const Box = styled<'div', IBoxProps>('div', {
    shouldForwardProp,
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
