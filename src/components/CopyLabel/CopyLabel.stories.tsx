import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { CopyLabel } from './CopyLabel';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';

const stories = storiesOf('CopyLabel', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            backgroundColor="main.$800"
            height="100vh"
            p={20}
            sx={{
                WebkitFontSmoothing: 'antialiased',
            }}
        >
            <CopyLabel text="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7" />
        </Box>
    </ThemeProvider>
));
