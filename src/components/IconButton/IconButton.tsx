import { CSSObject } from '@emotion/core';
import React, { FC } from 'react';
import { Button, ButtonProps } from '../Button/Button';

type IconButtonProps = {
    _hover?: CSSObject;
    _focus?: CSSObject;
    _disabled?: CSSObject;
};

export const IconButton: FC<ButtonProps & IconButtonProps> = ({
    children,
    _hover,
    _focus,
    _disabled,
    ...rest
}) => {
    return (
        <Button
            sx={{
                cursor: 'pointer',
                '& > *': {
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                },
                ':focus': _focus,
                ':hover': _hover,
                ':disabled': _disabled,
            }}
            position="relative"
            bg="transparent"
            borderRadius={0}
            {...rest}
        >
            {children}
        </Button>
    );
};
