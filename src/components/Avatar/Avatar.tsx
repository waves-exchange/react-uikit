import React from 'react';
import { config, create } from 'identity-img';
import { styled } from '../../styled';
import { always } from 'ramda';
import { variantSizes } from './styles';
import { getIcon, getSize } from './helpers';
import { Icon } from '../Icon/Icon';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { animatedGradient } from './keyframes';

config({ rows: 8, cells: 8 });

export const avatarTestId = 'avatar';

export type TAvatarSizes = keyof typeof variantSizes;

export interface AvatarProps {
    address: string;
    variantSize?: TAvatarSizes;
    isSmart?: boolean;
    isWavesKeeper?: boolean;
    isLedger?: boolean;
    hasMigrationAchievement?: boolean;
}

const AvatarFunction: React.FC<AvatarProps> = ({
    address,
    variantSize,
    isSmart = false,
    isWavesKeeper = false,
    isLedger = false,
    hasMigrationAchievement = false,
    ...props
}) => {
    const icon = getIcon({ isSmart, isWavesKeeper, isLedger });

    return (
        <Box
            width={getSize(variantSize)}
            height={getSize(variantSize)}
            position="relative"
            display="inline-block"
            borderRadius="circle"
            zIndex={1}
            sx={
                hasMigrationAchievement
                    ? {
                          ':before': {
                              content: '""',
                              borderRadius: 'circle',
                              position: 'absolute',
                              left: -2,
                              top: -2,
                              backgroundImage:
                                  'linear-gradient(60deg, #E14B51, #BC5A7B, #9968A3, #7C74C4, #7577CC, #5A81EA)',
                              backgroundSize: '400%',
                              width: 'calc(100% + 4px)',
                              height: 'calc(100% + 4px)',
                              zIndex: -1,
                              animation: `${animatedGradient} 3s linear infinite`,
                          },
                      }
                    : {}
            }
            data-testid={avatarTestId}
        >
            <img
                src={create(address, {
                    size: getSize(variantSize) * window.devicePixelRatio,
                })}
                {...props}
            />
            {icon ? (
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
                >
                    <Icon icon={icon} size={8} color="standard.$0" />
                </Flex>
            ) : null}
        </Box>
    );
};

export const Avatar = styled(AvatarFunction, {
    shouldForwardProp: always(true),
})(() => ({
    overflow: 'hidden',
    borderRadius: '100%',
    width: '100%',
    height: '100%',
}));
