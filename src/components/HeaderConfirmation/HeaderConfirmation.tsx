import React, { FC } from 'react';
import { Box, Text, Flex, TFlexProps } from '../..';
import { AddressAvatar } from '../AddressAvatar/AddressAvatar';

interface IHeaderConfirmationProps extends TFlexProps {
    address: string;
    name: string;
    balance: string;
}

export const HeaderConfirmation: FC<IHeaderConfirmationProps> = ({
    address,
    name,
    balance,
    ...rest
}) => {
    return (
        <Flex
            justifyContent="space-between"
            px="$40px"
            alignItems="center"
            {...rest}
        >
            <Box mr="$10">
                <AddressAvatar address={address} isShort={true} name={name} />
            </Box>
            <Flex flexDirection="column" alignItems="flex-end">
                <Text variant="footnote1" color="basic.$500">
                    Balance
                </Text>
                <Text variant="body2" color="standard.$0">
                    {balance}
                </Text>
            </Flex>
        </Flex>
    );
};
