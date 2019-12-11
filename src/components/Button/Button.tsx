import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import { variant } from 'styled-system';
import { Box, BoxProps } from '../Box/Box';
import { variants, variantSizes } from './styles';

export type Variant = keyof typeof variants;
export type VariantSize = keyof typeof variantSizes;

type ButtonSpecificProps = {
    variant?: Variant;
    variantSize?: VariantSize;
};

type ButtonProps = BoxProps &
    ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonSpecificProps;

export const Button = styled(Box)<ButtonProps>(
    variant({
        prop: 'variant',
        variants,
    }),
    variant({
        prop: 'variantSize',
        variants: variantSizes,
    })
);

Button.defaultProps = {
    as: 'button',
    type: 'button',
    border: 0,
    borderRadius: '$4',
};
