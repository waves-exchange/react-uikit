import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'components/Flex/Flex';
import { Button } from 'components/Button/Button';

const stories = storiesOf('Button', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <h3>Large</h3>
                <Button mb="16" variant="primary" size="large">Primary</Button>
                <Button mb="16" variant="secondary" size="large">Secondary</Button>
                <Button mb="16" variant="action" size="large">Action</Button>
                <Button mb="16" variant="accent" size="large">Action</Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Medium</h3>
                <Button mb="16" variant="primary" size="medium">Primary</Button>
                <Button mb="16" variant="secondary" size="medium">Secondary</Button>
                <Button mb="16" variant="action" size="medium">Action</Button>
                <Button mb="16" variant="accent" size="medium">Action</Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Small</h3>
                <Button mb="16" variant="primary" size="small">Primary</Button>
                <Button mb="16" variant="secondary" size="small">Secondary</Button>
                <Button mb="16" variant="action" size="small">Action</Button>
                <Button mb="16" variant="accent" size="small">Action</Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Potty</h3>
                <Button mb="16" variant="primary" size="potty">Primary</Button>
                <Button mb="16" variant="secondary" size="potty">Secondary</Button>
                <Button mb="16" variant="action" size="potty">Action</Button>
                <Button mb="16" variant="accent" size="potty">Action</Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Micro</h3>
                <Button mb="16" variant="primary" size="micro">Primary</Button>
                <Button mb="16" variant="secondary" size="micro">Secondary</Button>
                <Button mb="16" variant="action" size="micro">Action</Button>
                <Button mb="16" variant="accent" size="micro">Action</Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('disabled', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="column" p="16">
            <Button mb="16" disabled={true}>Button</Button>
            <Button mb="16" variant="secondary" disabled={true}>Button</Button>
            <Button mb="16" variant="action" disabled={true}>Button</Button>
            <Button mb="16" variant="accent" disabled={true}>Button</Button>
        </Flex>
    </ThemeProvider>
));
