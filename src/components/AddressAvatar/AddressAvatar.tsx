import React, { FC } from 'react';
import { Avatar, Box, Text, Flex } from '../..';

export const AddressAvatar: FC<IAddressAvatarProps> = ({
    address,
    name,
    hasName,
    isShort,
}) => (
    <Flex>
        <Box marginRight="10px">
            <Avatar address={address} />
        </Box>
        <Flex flexDirection="column" justifyContent="center">
            {hasName && <Text variant="footnote1">{name}</Text>}
            <Text variant="body2" isTruncated={isShort}>
                {address}
            </Text>
        </Flex>
    </Flex>
);

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
