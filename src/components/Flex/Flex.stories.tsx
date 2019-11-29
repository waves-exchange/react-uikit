import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { Flex } from './Flex';

const stories = storiesOf('Flex', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex justifyContent="space-between">
            {Array.from(new Array(5)).map((_, i) => (
                <Box key={i} p={4} bg="primary" />
            ))}
        </Flex>
    </ThemeProvider>
));
