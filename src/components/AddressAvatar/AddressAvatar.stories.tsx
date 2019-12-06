import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { AddressAvatar } from './AddressAvatar';

const stories = storiesOf('AddressAvatar', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <AddressAvatar address={'3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7'} />
        <AddressAvatar size={'large'}
            address={'3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7'} />
    </ThemeProvider>
));
