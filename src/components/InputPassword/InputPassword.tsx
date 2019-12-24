import React, { FC, useState } from 'react';
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
                <Flex
                    sx={{
                        ':hover': {
                            color: show ? 'primary.$300' : 'basic.$500',
                        },
                    }}
                    color={show ? 'primary.$300' : 'basic.$700'}
                    width={togglerWidth}
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    onClick={toggle}
                    data-testid="InputPasswordToggler"
                    cursor="pointer"
                    transition="default"
                >
                    {show ? (
                        <Icon icon={iconEye} />
                    ) : (
                        <Icon icon={iconEyeActive} />
                    )}
                </Flex>
            </InputElement>
        </Flex>
    );
};

InputPassword.defaultProps = Input.defaultProps;
