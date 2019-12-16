import React, { FC } from 'react';
import { Avatar, Box, Text, Flex } from '../..';

export const AddressAvatar: FC<IAddressAvatarProps> = ({
    address,
    name,
    hasName,
    isShort,
}) => {
    const getShortAddress = (address: string): string =>
        `${address.slice(0, 8)}***${address.slice(-8)}`;

    return (
        <Flex>
            <Box marginRight="10px">
                <Avatar address={address} />
            </Box>
            <Flex flexDirection="column" justifyContent="center">
                {hasName && (
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
};

interface IAddressAvatarProps {
    address: string;
    name: string;
    hasName?: boolean;
    isShort?: boolean;
}

AddressAvatar.defaultProps = {
    hasName: true,
    isShort: false,
};
