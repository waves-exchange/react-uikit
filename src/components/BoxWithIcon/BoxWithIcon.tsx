import React, { FC, ReactNode, useMemo } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon, IIcon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { Tooltip } from '../Tooltip/Tooltip';
import { Options } from '@popperjs/core';

type Props = {
    icon: IIcon;
    iconLabel?: string;
    popperOptions?: Partial<Options>;
};

export const BoxWithIcon: FC<Props & BoxProps> = ({
    children,
    icon,
    iconLabel,
    popperOptions,
    ...rest
}) => {
    const iconNode = useMemo(() => {
        if (!iconLabel)
            return (
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
            );

        return (
            <TooltipIcon
                icon={icon}
                iconLabel={iconLabel}
                popperOptions={popperOptions}
            />
        );
    }, [icon, iconLabel, popperOptions]);

    return (
        <Box position="relative" display="inline-block" {...rest}>
            {children}
            {iconNode}
        </Box>
    );
};

type TooltipIconProps = {
    icon: IIcon;
    iconLabel: string;
    popperOptions?: Partial<Options>;
};

const TooltipIcon: FC<TooltipIconProps> = ({
    icon,
    popperOptions,
    iconLabel,
}) => (
    <Tooltip
        arrowSize="4px"
        hasArrow={true}
        arrowColor="#5A81EA" // TODO научить тултип понимать цвета из темы
        offset={4}
        label={(): ReactNode => (
            <Flex
                borderTop="4px solid"
                borderTopColor="primary.$300"
                backgroundColor="#4a5060"
                borderRadius="$4"
                py="8px"
                px="12px"
                color="standard.$0"
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
                    <Icon icon={icon} size={10} color="standard.$0" />
                </Flex>
                <Text ml="$10" variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                    {iconLabel}
                </Text>
            </Flex>
        )}
        placement="bottom"
        popperOptions={popperOptions}
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
);
