import styled, { WithTheme } from '@emotion/styled';
import { PropsWithChildren } from 'react';
import {
    styleFn,
    textShadow,
    TextShadowProps,
    variant,
    system,
} from 'styled-system';
import CSS from 'csstype';
import { Box, BoxProps } from '../Box/Box';
import { TDefaultTheme } from '../../interface';
import { variants } from './styles';

const truncate: styleFn = (
    props: WithTheme<PropsWithChildren<{ isTruncated?: boolean }>, object>
) => {
    if (props.isTruncated === true) {
        return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        };
    }
};

export type TTextVariant = keyof typeof variants;

type TextSpecificProps = {
    isTruncated?: boolean;
    variant?: TTextVariant;
    textDecoration?: CSS.TextDecorationProperty;
};

export type TTextProps = BoxProps & TextShadowProps & TextSpecificProps;

export const Text = styled(Box)<TTextProps, TDefaultTheme>(
    truncate,
    textShadow,
    system({ textDecoration: true }),
    variant({
        prop: 'variant',
        variants,
    })
);

Text.defaultProps = {
    as: 'span',
};
