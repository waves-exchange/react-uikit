// @ts-nocheck
import styled, { WithTheme } from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { styleFn, textShadow, TextShadowProps, variant } from 'styled-system';
import { Box, IBoxProps } from 'components/Box/Box';
import { TDefaultTheme } from 'interface';
import shouldForwardProp from '@styled-system/should-forward-prop';

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

export const textVariants = {
    body1: {
        fontSize: '$15',
        lineHeight: '$20',
    },
    body2: {
        fontSize: '$13',
        lineHeight: '$18',
    },
    footnote1: {
        fontSize: '$12',
        lineHeight: '$16',
    },
    footnote2: {
        fontSize: '$11',
        lineHeight: '$14',
    },
    heading1: {
        fontSize: '$28',
        margin: 0,
        lineHeight: '$34',
        fontWeight: '$700',
    },
    heading2: {
        fontSize: '$22',
        margin: 0,
        lineHeight: '$28',
        fontWeight: '$400',
    },
};

export type TTextVariant = keyof typeof textVariants;

export type TTextProps = IBoxProps &
    TextShadowProps & {
        variant?: TTextVariant;
        isTruncated?: boolean;
    };

export const Text = styled(Box, shouldForwardProp)<TTextProps, TDefaultTheme>(
    truncate,
    textShadow,
    variant({
        prop: 'variant',
        variants: textVariants,
    })
);

Text.defaultProps = {
    variant: 'body1',
};
