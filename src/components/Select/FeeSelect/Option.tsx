import React from 'react';
import { Flex } from '../../Flex/Flex';
import { Text } from '../../Text/Text';

export interface FeeOption {
    name: string;
    ticker: string;
    value: string;
    id: string;
}

export const Option: React.FC<FeeOption> = ({ name, ticker, value }) => (
    <Flex
        justifyContent="space-between"
        flex={1}
        color="standard.$0"
        fontSize="$13"
        lineHeight="$18"
    >
        <Text>{name}</Text>
        <Text>
            {value} {ticker}
        </Text>
    </Flex>
);
