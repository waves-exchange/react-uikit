import { storiesOf } from '@storybook/react';
import { Button } from 'components/Button/Button';
import { Flex } from 'components/Flex/Flex';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { defaultTheme } from 'themes/default';

const stories = storiesOf('Button', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p={16}>
            <Flex flexDirection="column" mr={16}>
                <h3>Large</h3>
                <Button mb={16} variant="primary" variantSize="large">
                    Primary
                </Button>
                <Button mb={16} variant="danger" variantSize="large">
                    Secondary
                </Button>
                <Button mb={16} variant="transparent" variantSize="large">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Medium</h3>
                <Button mb={16} variant="primary" variantSize="medium">
                    Primary
                </Button>
                <Button mb={16} variant="danger" variantSize="medium">
                    Secondary
                </Button>
                <Button mb={16} variant="transparent" variantSize="medium">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Small</h3>
                <Button mb={16} variant="primary" variantSize="small">
                    Primary
                </Button>
                <Button mb={16} variant="danger" variantSize="small">
                    Secondary
                </Button>
                <Button mb={16} variant="transparent" variantSize="small">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Potty</h3>
                <Button mb={16} variant="primary" variantSize="potty">
                    Primary
                </Button>
                <Button mb={16} variant="danger" variantSize="potty">
                    Secondary
                </Button>
                <Button mb={16} variant="transparent" variantSize="potty">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Micro</h3>
                <Button mb={16} variant="primary" variantSize="micro">
                    Primary
                </Button>
                <Button mb={16} variant="danger" variantSize="micro">
                    Secondary
                </Button>
                <Button mb={16} variant="transparent" variantSize="micro">
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('disabled', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p={16}>
            <Flex flexDirection="column" mr={16}>
                <h3>Large</h3>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="large"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="danger"
                    variantSize="large"
                    disabled={true}
                >
                    Secondary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="large"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Medium</h3>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="medium"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="danger"
                    variantSize="medium"
                    disabled={true}
                >
                    Secondary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="medium"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Small</h3>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="small"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="danger"
                    variantSize="small"
                    disabled={true}
                >
                    Secondary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="small"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Potty</h3>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="potty"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="danger"
                    variantSize="potty"
                    disabled={true}
                >
                    Secondary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="potty"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <h3>Micro</h3>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="micro"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="danger"
                    variantSize="micro"
                    disabled={true}
                >
                    Secondary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="micro"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));
