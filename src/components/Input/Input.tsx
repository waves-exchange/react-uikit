import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { TDefaultTheme } from '../../interface';
import { Box } from '../Box/Box';
import { InterpolationWithTheme } from '@emotion/core';

export const inputSizeVariants = {
    medium: {
        fontSize: '$15',
        height: 'medium',
        paddingLeft: '$20',
        paddingRight: '$20',
    },
    mediumWE: {
        fontSize: '$13',
        height: 'medium',
        paddingLeft: 16,
        paddingRight: 16,
    },
};

const defaultStyles = {
    backgroundColor: 'basic.$900',
    borderColor: 'main.$600',
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
        '&, &:hover, &:focus': {
            borderColor: 'danger.$300',
        },
    },
};

export const inputVariants = {
    default: defaultStyles,
    defaultWE: {
        ...defaultStyles,
        '&[aria-checked="true"]': {
            borderColor: 'green.$500',
        },
    },
};

export type InputSize = keyof typeof inputSizeVariants;
export type InputVariant = keyof typeof inputVariants;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    variantSize?: InputSize;
    variant?: InputVariant;
    paddingRight?: string;
    sx?: InterpolationWithTheme<TDefaultTheme>;
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
