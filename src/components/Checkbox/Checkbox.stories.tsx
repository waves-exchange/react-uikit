import React from 'react';
import { Flex } from '../Flex/Flex';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';

const stories = storiesOf('Checkbox', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex size={100} bg="main.$800" justifyContent="center" alignItems="center">
            <label>
                hello
                <Checkbox defaultChecked={true} onChange={(e) => console.log(e) }/>
            </label>
        </Flex>
    </ThemeProvider>
)); 