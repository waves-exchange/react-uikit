import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'components/Flex/Flex';
import { Box } from 'components/Box/Box';
import { Text } from 'components/Text/Text';
import { Help } from './Help';


const stories = storiesOf('Help', module);
const box = (
    <Box width="200px"
        color={defaultTheme.colors.standard[0]}>
        <Text>
            Enter this address into your Bitcoin client or wallet
        </Text>
        <Text>
            Once the transaction is confirmed,
            the gateway will process the transfer of BTC to a token in
            your Waves account.
        </Text>
        <Text>
            Please note that the gateway doesn't apply any fees for this operation.
        </Text>
    </Box>
);

stories.add('Bottom left', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row" p="16">
            <Text mr="10px" fontSize="15px" fontFamily="Roboto">
                Set a single password for all your Waves.Exchange accounts.
            </Text>
            <Help pl="10px" direction="bottom" align="right">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Bottom Center', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row" p="16">
            <Help direction="bottom" align="center">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Bottom Right', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row" p="16">
            <Help direction="bottom" align="right">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Top Left', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row" p="16">
            <Help direction="top" align="right">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));
