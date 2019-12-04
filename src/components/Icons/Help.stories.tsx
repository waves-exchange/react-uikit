import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'components/Flex/Flex';
import { Help } from './Help';


const stories = storiesOf('Help_Icon', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <Help marginBottom={10} padding={20} onMouseEnter={console.log} onMouseLeave={console.log}/>
                <Help size={'medium'}/>
                <Help theme={{ icons: { help: { default: 'red', hovered: 'blue' } } }}/>
                <Help size={'large'} theme={{ icons: { help: { default: 'red', hovered: 'blue' } } }}/>
                <Help size={'large'}
                      theme={{ iconSizes: { large: 50 }, icons: { help: { default: 'red', hovered: 'blue' } } }}/>
            </Flex>
        </Flex>
    </ThemeProvider>
));
