import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner } from './Spinner';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme, Flex } from '../..';

const stories = storiesOf('Spinner', module);

stories.add('simple', () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Flex
                backgroundColor="main.$800"
                height="100vh"
                justifyContent="center"
            >
                <Spinner />
            </Flex>
        </ThemeProvider>
    );
});
