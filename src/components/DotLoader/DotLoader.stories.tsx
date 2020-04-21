import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Flex } from '../Flex/Flex';
import { DotLoader } from './DotLoader';

const stories = storiesOf('DotLoader', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            p={30}
            backgroundColor="main.$800"
            justifyContent="center"
            alignItems="center"
        >
            <DotLoader />
        </Flex>
    </ThemeProvider>
));
