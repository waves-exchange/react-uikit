import React, { FC } from 'react';
import { Box, Button, Flex, TFlexProps } from '../..';
import { ConfirmationTitle } from '../ConfirmationTitle/ConfirmationTitle';

interface IConfirmationProps extends TFlexProps {
    titleInfo: {
        address: string;
        name: string;
        balance: string;
    };
}

export const Confirmation: FC<IConfirmationProps> = ({
    titleInfo,
    children,
    ...rest
}) => {
    return (
        <Flex
            backgroundColor="main.$800"
            maxWidth="520px"
            flexDirection="column"
            justifyContent="space-between"
            borderRadius="$6"
            {...rest}
        >
            <ConfirmationTitle
                titleInfo={titleInfo}
                borderBottomColor="basic.$1000"
                borderBottomWidth="1px"
                borderBottomStyle="solid"
            />
            <Box maxHeight="432px" overflowY="auto">
                {children}
            </Box>
            <Flex
                justifyContent="space-between"
                borderTopColor="basic.$1000"
                borderTopWidth="1px"
                borderTopStyle="solid"
                px="$40"
                py="$20"
            >
                <Button variant="danger" variantSize="large" width="210px">
                    Reject
                </Button>
                <Button variant="primary" variantSize="large" width="210px">
                    Confirm
                </Button>
            </Flex>
        </Flex>
    );
};
