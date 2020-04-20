import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { DotLoader } from './DotLoader';

const stories = storiesOf('DotLoader', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box p={30} position="relative" backgroundColor="main.$800">
            <DotLoader />
        </Box>
    </ThemeProvider>
));
