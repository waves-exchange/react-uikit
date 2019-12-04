import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'components/Flex/Flex';
import { Avatar } from './Avatar';

const stories = storiesOf('Avatar', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <Avatar size={30}
                        address={'3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7'}/>
            </Flex>
        </Flex>
    </ThemeProvider>
));
