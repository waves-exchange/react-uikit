import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { ElementType, RefAttributes, HTMLAttributes } from 'react';
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
    FlexboxProps & {
        as?: ElementType;
    };

export const Box = styled<'div', IBoxProps>('div', {
    shouldForwardProp
})(compose(
    layout,
    color,
    space,
    background,
    border,
    grid,
    position,
    boxShadow,
    typography,
    flexbox
), {
    boxSizing: 'border-box'
});


