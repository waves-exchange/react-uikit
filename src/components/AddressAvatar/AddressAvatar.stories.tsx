import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../..';
import { ThemeProvider } from 'emotion-theming';
import { AddressAvatar } from './AddressAvatar';
import { Box } from '../..';

const stories = storiesOf('AddressAvatar', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box backgroundColor="main.$800" maxWidth="360px">
            <AddressAvatar
                p="8px 16px"
                address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
                name="Coco Jumbo"
            />
            <AddressAvatar
                p="8px 16px"
                isShort={true}
                address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
            />
        </Box>
    </ThemeProvider>
));
