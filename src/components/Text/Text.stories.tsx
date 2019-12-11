import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Text } from './Text';
import { Box } from '../Box/Box';

const stories = storiesOf('Text', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box>
            <Box>
                <Text>Body-1</Text>
            </Box>
            <Box>
                <Text variant="body2">Body-2</Text>
            </Box>
            <Box>
                <Text variant="body2" fontSize="15px">
                    Body-23
                </Text>
            </Box>
            <Box>
                <Text variant="footnote1">Footnote-1</Text>
            </Box>
            <Box>
                <Text variant="footnote2">Footnote-2</Text>
            </Box>
        </Box>
    </ThemeProvider>
));
