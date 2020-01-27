import React from 'react';
import { Flex, TFlexProps } from '../../Flex/Flex';
import { Text } from '../../Text/Text';

export type FeeOption = TFlexProps & {
    name: string;
    ticker: string;
    value: string;
    id: string;
};

export const Option: React.FC<FeeOption> = ({
    name,
    ticker,
    value,
    ...rest
}) => (
    <Flex
        justifyContent="space-between"
        flex={1}
        color="standard.$0"
        fontSize="$13"
        lineHeight="$18"
        {...rest}
    >
        <Text>{name}</Text>
        <Text>
            {value} {ticker}
        </Text>
    </Flex>
);
