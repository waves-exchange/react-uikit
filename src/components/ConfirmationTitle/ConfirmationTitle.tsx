import React, { FC } from 'react';
import { Box, Text, Flex, TFlexProps } from '../..';
import { AddressAvatar } from '../AddressAvatar/AddressAvatar';

interface IConfirmationTitleProps extends TFlexProps {
    titleInfo: {
        address: string;
        name: string;
        balance: string;
    };
}

export const ConfirmationTitle: FC<IConfirmationTitleProps> = ({
    titleInfo,
    ...rest
}) => {
    return (
        <Flex justifyContent="space-between" padding="16px 40px" {...rest}>
            <Box marginRight="space.$10">
                <AddressAvatar
                    address={titleInfo.address}
                    isShort={true}
                    name={titleInfo.name}
                />
            </Box>
            <Flex flexDirection="column" alignItems="flex-end">
                <Text variant="footnote1" color="basic.$500">
                    Balance
                </Text>
                <Text variant="body2" color="standard.$0">
                    {titleInfo.balance}
                </Text>
            </Flex>
        </Flex>
    );
};
