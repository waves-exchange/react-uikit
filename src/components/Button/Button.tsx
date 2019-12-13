import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';
import { variant } from 'styled-system';
import { Box, BoxProps, BoxAsElement } from '../Box/Box';
import { variants, variantSizes } from './styles';

export type Variant = keyof typeof variants;
export type VariantSize = keyof typeof variantSizes;

type ButtonSpecificProps = {
    variant?: Variant;
    variantSize?: VariantSize;
};

export type ButtonProps = BoxProps<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
> &
    ButtonSpecificProps;

export const Button = styled(Box as BoxAsElement<'button', ButtonProps>)(
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
