import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { TDefaultTheme } from '../../interface';
import { Flex, TFlexProps } from '../Flex/Flex';
import { iconEye } from '../../icons/eye';
import { iconEyeActive } from '../../icons/eyeActive';
import {
    Input,
    InputProps,
    InputSize,
    inputSizeVariants,
} from '../Input/Input';
import { InputElement } from '../InputElement/InputElement';
import { Icon } from '../Icon/Icon';

type InputPasswordTogglerProps = {
    show: boolean;
};

const InputPasswordToggler = styled(Flex)<
    InputPasswordTogglerProps,
    TDefaultTheme
>(({ show, theme }) => ({
    cursor: 'pointer',
    color: show ? theme.colors.primary.$300 : theme.colors.basic.$700,
    ':hover': {
        color: show ? theme.colors.primary.$300 : theme.colors.basic.$300,
    },
}));

export const InputPassword: FC<InputProps & TFlexProps> = ({
    id,
    ...props
}) => {
    const [show, setShow] = useState(false);

    const toggle = (): void => setShow(!show);
    const variantSize = props.variantSize as InputSize;
    const togglerWidth = inputSizeVariants[variantSize]
        ? inputSizeVariants[variantSize].height
        : '0';

    return (
        <Flex position="relative">
            <Input
                id={id}
                {...props}
                type={show ? 'text' : 'password'}
                paddingRight={togglerWidth}
            />
            <InputElement placement="right">
                <InputPasswordToggler
                    show={show}
                    width={togglerWidth}
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    onClick={toggle}
                    data-testid="InputPasswordToggler"
                >
                    {show ? (
                        <Icon icon={iconEye} />
                    ) : (
                        <Icon icon={iconEyeActive} />
                    )}
                </InputPasswordToggler>
            </InputElement>
        </Flex>
    );
};

InputPassword.defaultProps = Input.defaultProps;
