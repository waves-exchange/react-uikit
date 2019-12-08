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
                <Button mb="16" variant="primary" size="large">
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="large">
                    Secondary
                </Button>
                <Button mb="16" variant="transparent" size="large">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Medium</h3>
                <Button mb="16" variant="primary" size="medium">
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="medium">
                    Secondary
                </Button>
                <Button mb="16" variant="transparent" size="medium">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Small</h3>
                <Button mb="16" variant="primary" size="small">
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="small">
                    Secondary
                </Button>
                <Button mb="16" variant="transparent" size="small">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Potty</h3>
                <Button mb="16" variant="primary" size="potty">
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="potty">
                    Secondary
                </Button>
                <Button mb="16" variant="transparent" size="potty">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Micro</h3>
                <Button mb="16" variant="primary" size="micro">
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="micro">
                    Secondary
                </Button>
                <Button mb="16" variant="transparent" size="micro">
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('disabled', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="column" mr="16">
                <h3>Large</h3>
                <Button mb="16" variant="primary" size="large" disabled={true}>
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="large" disabled={true}>
                    Secondary
                </Button>
                <Button
                    mb="16"
                    variant="transparent"
                    size="large"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Medium</h3>
                <Button mb="16" variant="primary" size="medium" disabled={true}>
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="medium" disabled={true}>
                    Secondary
                </Button>
                <Button
                    mb="16"
                    variant="transparent"
                    size="medium"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Small</h3>
                <Button mb="16" variant="primary" size="small" disabled={true}>
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="small" disabled={true}>
                    Secondary
                </Button>
                <Button
                    mb="16"
                    variant="transparent"
                    size="small"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Potty</h3>
                <Button mb="16" variant="primary" size="potty" disabled={true}>
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="potty" disabled={true}>
                    Secondary
                </Button>
                <Button
                    mb="16"
                    variant="transparent"
                    size="potty"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr="16">
                <h3>Micro</h3>
                <Button mb="16" variant="primary" size="micro" disabled={true}>
                    Primary
                </Button>
                <Button mb="16" variant="danger" size="micro" disabled={true}>
                    Secondary
                </Button>
                <Button
                    mb="16"
                    variant="transparent"
                    size="micro"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));
