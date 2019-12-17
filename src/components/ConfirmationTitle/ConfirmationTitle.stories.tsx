import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Box } from '../..';
import { ConfirmationTitle } from './ConfirmationTitle';

const stories = storiesOf('ConfirmationTitle', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box backgroundColor="main.$800" maxWidth="520px">
            <ConfirmationTitle
                titleInfo={{
                    address: '3PD4KPsJwN3fzT5H1JpBEJYdWinnLghGdr2',
                    name: 'Florieke Krebber',
                    balance: '432.97655789 Waves',
                }}
            />
        </Box>
    </ThemeProvider>
));
