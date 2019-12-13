import { CSSObject } from '@emotion/core';
import React, { FC } from 'react';
import { Button, ButtonProps } from '../Button/Button';

type IconButtonProps = {
    _hover?: CSSObject;
    _focus?: CSSObject;
    _disabled?: CSSObject;
    _disabledAndHover?: CSSObject;
};

export const IconButton: FC<ButtonProps & IconButtonProps> = ({
    children,
    _hover,
    _focus,
    _disabled,
    _disabledAndHover,
    ...rest
}) => {
    return (
        <Button
            display="flex"
            sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ':focus': _focus,
                ':hover': _hover,
                ':disabled': _disabled,
                ':hover:disabled': _disabledAndHover,
            }}
            bg="transparent"
            borderRadius={0}
            {...rest}
        >
            {children}
        </Button>
    );
};
