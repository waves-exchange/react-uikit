import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Help } from './Help';

const stories = storiesOf('Help', module);
const box = (
    <Box width="200px" color="standard.$0">
        <Text>Enter this address into your Bitcoin client or wallet</Text>
        <Text>
            Once the transaction is confirmed, the gateway will process the
            transfer of BTC to a token in your Waves account.
        </Text>
        <Text>
            Please note that the gateway doesn't apply any fees for this
            operation.
        </Text>
    </Box>
);

stories.add('Bottom Left', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Text
                mr="10px"
                fontSize="15px"
                fontFamily="Roboto"
                color="basic.$500"
            >
                Set a single password for all your Waves.Exchange accounts.
            </Text>
            <Help direction="bottom" align="left">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Bottom Center', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help direction="bottom" align="center">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Bottom Right', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help direction="bottom" align="right">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Top Left', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help direction="top" align="right">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));
