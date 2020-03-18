import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { FormattedInput } from './FormattedInput';

const stories = storiesOf('FormattedInput', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="main.$800"
            color="standard.$0"
        >
            <Box mb="$20">
                <label>
                    Default
                    <FormattedInput
                        formatSeparator=" "
                        decimals={0}
                        onChange={(event: any): void => {
                            // console.log(
                            //     '%c event',
                            //     'color: #e5b6ed',
                            //     event.value
                            // );
                        }}
                    />
                </label>
            </Box>
        </Box>
    </ThemeProvider>
));
