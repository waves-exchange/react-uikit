import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Box } from './Box';

const stories = storiesOf('Box', module);

stories.add('simple', () => (
    <Box>Box</Box>
));

stories.add('shadow', () => (
    <ThemeProvider theme={defaultTheme}>
        {['default'].map(name => (
            <>
                <h3>{name}</h3>
                <Box
                    boxShadow={name}
                    p={4}
                    mx={2}
                >
                    Box
                </Box>
            </>
        ))}
    </ThemeProvider>
));

stories.add('responsive', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            p={4}
            width={['100%', '50%', 1 / 3]}
            color="text"
            bg="background"
        >
            Box
        </Box>
    </ThemeProvider>
));
