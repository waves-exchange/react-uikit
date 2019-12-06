import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from 'themes/default';
import { Box } from '../Box/Box';
import { Input } from './Input';

const stories = storiesOf('Input', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box height="100vh" p="$20" backgroundColor="main.$800" color="standard.white">
            <Box mb="$20">
                <label>
                    Default
                    <Input />
                </label>
            </Box>

            <Box mb="$20">
                <label>
                    Disabled
                    <Input disabled={true} />
                </label>
            </Box>

            <Box mb="$20">
                <label>
                    Error
                    <Input invalid={true} />
                </label>
            </Box>
        </Box>
    </ThemeProvider>
));
