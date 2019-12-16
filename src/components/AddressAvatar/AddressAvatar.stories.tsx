import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { AddressAvatar } from './AddressAvatar';
import { Box } from '../..';

const stories = storiesOf('AddressAvatar', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box backgroundColor="main.$800" maxWidth="360px">
            <Box padding="8px 16px">
                <AddressAvatar
                    address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
                    name="Coco Jumbo"
                />
            </Box>
            <Box padding="8px 16px">
                <AddressAvatar
                    isShort={true}
                    hasName={false}
                    address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
                    name="Coco Jumbo"
                />
            </Box>
        </Box>
    </ThemeProvider>
));
