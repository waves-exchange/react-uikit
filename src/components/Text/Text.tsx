import styled, { WithTheme } from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { ElementType, PropsWithChildren } from 'react';
import {
    background,
    BackgroundProps,
    border,
    BorderProps,
    color,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    styleFn,
    textShadow,
    TextShadowProps,
    typography,
    TypographyProps
} from 'styled-system';

const truncate: styleFn = (props: WithTheme<PropsWithChildren<{ isTruncated?: boolean }>, object>) => {
    if (props.isTruncated === true) {
        return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        };
    }
};

export interface ITextProps extends
    LayoutProps,
    ColorProps,
    SpaceProps,
    BackgroundProps,
    BorderProps,
    PositionProps,
    TextShadowProps,
    TypographyProps,
    FlexboxProps {
    as?: ElementType;
    isTruncated?: boolean;
}

export const Text = styled<'span', ITextProps>('span', {
    shouldForwardProp
})(truncate, compose(
    layout,
    color,
    space,
    background,
    border,
    position,
    textShadow,
    typography,
    flexbox
));
