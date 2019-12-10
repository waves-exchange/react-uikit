import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import React, { FC, useState } from 'react';
import { TDefaultTheme } from 'src/interface';
import { Flex } from '../Flex/Flex';
import { iconEye } from '../../assets/icons/eye';
import { iconEyeActive } from '../../assets/icons/eyeActive';
import { Input, InputProps, InputSize } from '../Input/Input';
import { InputElement } from '../InputElement/InputElement';
import { InputGroup } from '../InputGroup/InputGroup';
import { Icon } from '../Icon/Icon';

type InputPasswordTogglerProps = {
    show: boolean;
};

const InputPasswordToggler = styled(Flex)<
    InputPasswordTogglerProps,
    TDefaultTheme
>(({ show, theme }) => ({
    cursor: 'pointer',
    color: show ? theme.colors.primary.$300 : theme.colors.basic.$500,
    ':hover': {
        color: show ? theme.colors.primary.$300 : theme.colors.basic.$300,
    },
}));

export const InputPassword: FC<InputProps> = (props) => {
    const [show, setShow] = useState(false);
    const theme = useTheme<TDefaultTheme>();

    const toggle = (): void => setShow(!show);
    const variantSize = props.variantSize as InputSize;
    const togglerWidth = theme.components.input.sizes[variantSize]
        ? theme.components.input.sizes[variantSize].height
        : '0';

    return (
        <InputGroup>
            <Input
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
        </InputGroup>
    );
};

InputPassword.defaultProps = Input.defaultProps;
