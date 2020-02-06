import { Options } from '@popperjs/core';
import React, { FC, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon, IIcon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Tooltip } from '../Tooltip/Tooltip';
import { AssetLogo, AssetLogoProps } from './AssetLogo';

type AssetLogoWithIconProps = BoxProps &
    AssetLogoProps &
    Record<'popperOptions', Partial<Options>> & {
        showIcon: boolean;
        icon: IIcon;
    };

export const AssetLogoWithIcon: FC<AssetLogoWithIconProps> = ({
    assetId,
    name,
    logo,
    variant,
    popperOptions,
    showIcon,
    icon,
    ...rest
}) => {
    return (
        <Box position="relative" {...rest}>
            <AssetLogo
                assetId={assetId}
                name={name}
                logo={logo}
                variant={variant}
            />
            {showIcon && (
                <Tooltip
                    arrowSize="4px"
                    hasArrow={true}
                    arrowColor="#5A81EA" // TODO научить тултип понимать цвета из темы
                    offset={4}
                    maxWidth="360px"
                    label={(): ReactNode => (
                        <Flex
                            borderTop="4px solid"
                            borderTopColor="primary.$300"
                            backgroundColor="#4a5060"
                            borderRadius="$4"
                            py="8px"
                            px="12px"
                            color="standard.$0"
                            width="max-content"
                            maxWidth="100%"
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                size="16px"
                                borderRadius="circle"
                                backgroundColor="main.$600"
                                flex="none"
                            >
                                <Icon
                                    icon={icon}
                                    size={10}
                                    color="standard.$0"
                                />
                            </Flex>
                            <Text ml="$10" variant="body2">
                                Smart asset
                            </Text>
                        </Flex>
                    )}
                    placement="bottom"
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'flip',
                                enabled: false,
                            },
                        ],
                        strategy: 'fixed',
                        ...popperOptions,
                    }}
                >
                    <Flex
                        position="absolute"
                        bottom={0}
                        right={0}
                        width={14}
                        height={14}
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="circle"
                        backgroundColor="main.$800"
                        cursor="pointer"
                    >
                        <Icon icon={icon} size={8} color="standard.$0" />
                    </Flex>
                </Tooltip>
            )}
        </Box>
    );
};
