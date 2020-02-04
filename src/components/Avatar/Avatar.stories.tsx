import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Avatar } from './Avatar';

const stories = storiesOf('Avatar', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Avatar address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7" />
        <Avatar
            variantSize="large"
            address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
        />
        <Avatar
            variantSize="large"
            address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
            isSmart={true}
            isWavesKeeper={true}
        />
        <Avatar
            variantSize="large"
            address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
            isWavesKeeper={true}
        />
        <Avatar
            address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
            isLedger={true}
            hasMigrationAchievement={true}
        />
    </ThemeProvider>
));
