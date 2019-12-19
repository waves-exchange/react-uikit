import React, { FC } from 'react';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import {
    getBarStyles,
    getPasswordHint,
    getPasswordHintStyles,
    TOTAL_BARS,
} from './helpers';

interface Props {
    password: string;
}

export const StreingthIndicator: FC<Props> = ({ password }) => {
    let passwordHint = '';

    switch (getPasswordHint(password)) {
        case 'empty':
        case 'short':
            passwordHint = 'must be at least 8 characters';
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
        <Flex width="100%" flexDirection="column" alignItems="flex-end">
            <Flex width="100%">
                {Array.from({ length: TOTAL_BARS }).map((_, index) => {
                    return (
                        <Box
                            bg="main.$500"
                            {...getBarStyles(password, index)}
                        />
                    );
                })}
            </Flex>
            <Text {...getPasswordHintStyles(password)}>{passwordHint}</Text>
        </Flex>
    );
};
