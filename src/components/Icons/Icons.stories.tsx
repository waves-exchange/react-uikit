import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'components/Flex/Flex';
import { CloseIcon } from './CloseIcon';
import { HelpIcon } from './HelpIcon';
import { Logo } from './Logo';


const stories = storiesOf('Icons', module);

stories.add('Close', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <CloseIcon />
                <CloseIcon size={'large'} />
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('Help', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <HelpIcon />
                <HelpIcon size={'large'} />
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
