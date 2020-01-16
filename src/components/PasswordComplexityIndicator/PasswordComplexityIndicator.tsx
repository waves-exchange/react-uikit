import React, { FC } from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import {
    getBarStyles,
    getPasswordHint,
    getPasswordHintStyles,
    BARS,
} from './helpers';

export const passwordComplexityIndicatorTestId = 'pw-strength-indicator';

interface Props {
    password: string;
    minPasswordLength: number;
}

export const PasswordComplexityIndicator: FC<Props & TFlexProps> = ({
    password,
    minPasswordLength,
    ...rest
}) => {
    let passwordHint = '';

    switch (getPasswordHint(password, minPasswordLength)) {
        case 'empty':
        case 'short':
            passwordHint = `must be at least ${minPasswordLength} characters`;
            break;
        case 'weak':
            passwordHint = 'weak password';
            break;
        case 'secure':
            passwordHint = 'secure password';
            break;
        default:
            break;
    }

    return (
        <Flex
            width="100%"
            flexDirection="column"
            alignItems="flex-end"
            {...rest}
            data-testid={passwordComplexityIndicatorTestId}
        >
            <Flex width="100%">
                {Array.from({ length: BARS }).map((_, barIndex) => {
                    return (
                        <Box
                            bg="main.$500"
                            {...getBarStyles(
                                password,
                                minPasswordLength,
                                barIndex
                            )}
                            key={barIndex}
                        />
                    );
                })}
            </Flex>
            <Text {...getPasswordHintStyles(password, minPasswordLength)}>
                {passwordHint}
            </Text>
        </Flex>
    );
};
