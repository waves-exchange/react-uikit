import React, { FC } from 'react';
import { Avatar, Box, Text, Flex, TFlexProps } from '../..';
import { getShortAddress } from './helpers';

interface IAddressAvatarProps extends TFlexProps {
    address: string;
    name?: string;
    isShort?: boolean;
}

export const AddressAvatar: FC<IAddressAvatarProps> = ({
    address,
    name,
    isShort,
    ...rest
}) => (
    <Flex {...rest}>
        <Box mr="10px">
            <Avatar address={address} />
        </Box>
        <Flex flexDirection="column" justifyContent="center">
            {name && (
                <Text variant="footnote1" color="basic.$500">
                    {name}
                </Text>
            )}
            <Text variant="body2" color="standard.$0">
                {isShort ? getShortAddress(address) : address}
            </Text>
        </Flex>
    </Flex>
);
