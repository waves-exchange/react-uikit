import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { TDefaultTheme } from 'interface';
import { Box } from '../Box/Box';

export type InputSize = keyof TDefaultTheme['components']['input']['sizes'];
export type InputVariant = keyof TDefaultTheme['components']['input']['variants'];

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    variantSize?: InputSize;
    variant?: InputVariant;
    paddingRight?: string;
};

export const Input = styled(Box)<InputProps, TDefaultTheme>(
    variant({
        prop: 'variantSize',
        scale: 'components.input.sizes',
    }),
    variant({
        prop: 'variant',
        scale: 'components.input.variants',
    }),
    ({ paddingRight }) => (paddingRight ? { paddingRight } : undefined), // TODO Виктор обещал починить
    {
        outline: 0,
    }
);

Input.defaultProps = {
    as: 'input',
    border: 'solid 1px',
    width: '100%',
    variant: 'default',
    variantSize: 'medium',
};
