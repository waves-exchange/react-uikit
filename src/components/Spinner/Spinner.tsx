import React from 'react';
import { around, sand } from './keyframes';
import styled from '@emotion/styled';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';
import { iconExchange } from '../../assets/icons/exchange';
import { Icon } from '../Icon/Icon';

const RedBox = styled(Box)({
    backgroundColor: '#E14B51',
    height: '100%',
    width: '100%',
    animation: `${sand} 3.8s infinite`,
    willChange: 'transform',
});

const BlueBox = styled(Box)({
    backgroundColor: '#5A81EA',
    height: '70.71%',
    width: '70.71%',
    position: 'absolute',
    overflow: 'hidden',
});

const TopBlueBox = styled(BlueBox)({
    top: 0,
    transform: 'rotate(-45deg)',
    transformOrigin: '0 0',
});

const BottomBlueBox = styled(BlueBox)({
    bottom: 0,
    transform: 'rotate(45deg)',
    transformOrigin: '0 100%',
});

export const Spinner: React.FC = () => {
    return (
        <Flex alignItems="center">
            <Box
                height={32}
                width={32}
                sx={{
                    animation: `${around} 3.8s infinite`,
                    willChange: 'transform',
                }}
                overflow="hidden"
                position="relative"
            >
                <TopBlueBox>
                    <Box
                        width={36}
                        height={18}
                        sx={{
                            transform: 'rotate(45deg)',
                            transformOrigin: '0 0',
                        }}
                    >
                        <RedBox />
                    </Box>
                </TopBlueBox>
                <BottomBlueBox>
                    <Box
                        width={36}
                        height={18}
                        sx={{
                            transform:
                                'rotate(-45deg) translateX(-50%) translateY(100%)',
                            transformOrigin: '0 0',
                        }}
                    >
                        <RedBox />
                    </Box>
                </BottomBlueBox>
            </Box>
            <Box ml={12}>
                <Icon
                    icon={iconExchange}
                    size={{ height: 46, width: 164 }}
                    color="standard.$0"
                />
            </Box>
        </Flex>
    );
};

Spinner.displayName = 'Spinner';
