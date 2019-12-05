import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'components/Flex/Flex';
import { Close } from './Close';
import { Help } from './Help';
import { Logo } from './Logo';


const stories = storiesOf('Icons', module);

stories.add('Close', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <Close />
                <Close size={'large'} />
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('Help', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <Help />
                <Help size={'large'} />
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('Logo', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <Logo/>
                <Logo size={80}/>
            </Flex>
        </Flex>
    </ThemeProvider>
));
