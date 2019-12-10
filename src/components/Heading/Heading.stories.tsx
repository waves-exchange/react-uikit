import React from 'react';
import { storiesOf } from '@storybook/react';
import { Heading } from './Heading';
import { Box } from 'components/Box/Box';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';

const stories = storiesOf('Heading', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box>
            <Box>
                <Heading>Heading 1</Heading>
            </Box>

            <Box>
                <Heading level={2}>Heading 2</Heading>
            </Box>
        </Box>
    </ThemeProvider>
));
