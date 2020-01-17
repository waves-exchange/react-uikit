import React from 'react';
import { Flex } from '../../Flex/Flex';
import { Text } from '../../Text/Text';

interface IFeeOption {
    name: string;
    ticker: string;
    value: string;
}

export const Option: React.FC<IFeeOption> = ({ name, ticker, value }) => (
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
