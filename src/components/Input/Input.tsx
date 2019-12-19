import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { TDefaultTheme } from '../../interface';
import { Box } from '../Box/Box';

export const inputSizeVariants = {
    medium: {
        fontSize: '$15',
        height: 'medium',
        paddingLeft: '$20',
        paddingRight: '$20',
    },
};

export const inputVariants = {
    default: {
        backgroundColor: 'basic.$900',
        borderColor: 'main.$500',
        borderRadius: '$4',
        color: 'standard.$0',
        ':hover:not(:disabled)': {
            borderColor: 'main.$200',
        },
        ':focus:not(:disabled)': {
            borderColor: 'primary.$300',
        },
        ':disabled': {
            backgroundColor: 'main.$700',
        },
        '&[aria-invalid="true"]': {
            borderColor: 'danger.$300',
        },
    },
};

export type InputSize = keyof typeof inputSizeVariants;
export type InputVariant = keyof typeof inputVariants;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    variantSize?: InputSize;
    variant?: InputVariant;
    paddingRight?: string;
};

export const Input = styled(Box)<InputProps, TDefaultTheme>(
    variant({
        prop: 'variantSize',
        variants: inputSizeVariants,
    }),
    variant({
        prop: 'variant',
        variants: inputVariants,
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
