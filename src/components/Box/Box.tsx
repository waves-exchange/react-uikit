import { InterpolationWithTheme } from '@emotion/core';
import styled, { WithTheme, StyledComponent } from '@emotion/styled';
import css, { SystemStyleObject } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
    ElementType,
    HTMLAttributes,
    RefAttributes,
    DetailedHTMLProps,
} from 'react';
import { TDefaultTheme } from '../../interface';
import {
    AlignSelfProps,
    background,
    BackgroundProps,
    border,
    BorderProps,
    boxShadow,
    BoxShadowProps,
    color,
    ColorProps,
    compose,
    FlexBasisProps,
    flexbox,
    FlexGrowProps,
    FlexProps,
    FlexShrinkProps,
    grid,
    GridProps,
    JustifySelfProps,
    layout,
    LayoutProps,
    OrderProps,
    overflow,
    OverflowProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    styleFn,
    typography,
    TypographyProps,
} from 'styled-system';

type FlexChildProps = FlexProps &
    FlexGrowProps &
    FlexShrinkProps &
    FlexBasisProps &
    FlexBasisProps &
    JustifySelfProps &
    AlignSelfProps &
    OrderProps;

export type BoxAsElement<
    E extends keyof JSX.IntrinsicElements,
    P
> = StyledComponent<JSX.IntrinsicElements[E], P, any>;

export type BoxProps<E = HTMLDivElement, A = HTMLAttributes<E>> = RefAttributes<
    E
> &
    A &
    DetailedHTMLProps<A, E> &
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
    FlexChildProps & {
        as?: ElementType;
        sx?: InterpolationWithTheme<TDefaultTheme>;
    };

const sx: styleFn = (
    props: WithTheme<{ sx: SystemStyleObject }, TDefaultTheme>
) => css(props.sx)(props.theme);

export const Box = styled<'div', BoxProps>('div', {
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
