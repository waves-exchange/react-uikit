import React, { FC } from 'react';
import { Avatar, Text, Flex, TFlexProps } from '../..';
import { getShortAddress } from './helpers';
import { TAvatarSizes } from '../Avatar/Avatar';

interface IAddressAvatarProps extends TFlexProps {
    address: string;
    avatarSize?: TAvatarSizes;
    name?: string;
    isShort?: boolean;
}

export const AddressAvatar: FC<IAddressAvatarProps> = ({
    address,
    avatarSize,
    name,
    isShort,
    ...rest
}) => (
    <Flex alignItems="center" {...rest}>
        <Avatar address={address} variantSize={avatarSize || 'large'} />
        <Flex ml="$10" flexDirection="column" justifyContent="center">
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
