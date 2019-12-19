import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Text } from '../Text/Text';
import { Switch } from './Switch';
import { defaultTheme } from '../../themes/default';

const stories = storiesOf('Switch', module);

stories.add('simple', () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                backgroundColor={defaultTheme.colors.main.$800}
                color={defaultTheme.colors.standard.$0}
                fontSize={defaultTheme.fontSizes.$21}
                height="100vh"
                pt={40}
            >
                <Flex flexDirection="column" width={300} margin="auto">
                    <Flex
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Text>Default</Text>
                        <Switch id="id_default" />
                    </Flex>

                    <Flex
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={20}
                    >
                        <Text>Default checked</Text>
                        <Switch id="id_default_checked" defaultChecked={true} />
                    </Flex>

                    <Flex
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={20}
                    >
                        <Text>Disabled</Text>
                        <Switch id="id_disabled" isDisabled={true} />
                    </Flex>

                    <Flex
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="space-between"
                        mt={20}
                    >
                        <Text>Checked and Disabled</Text>
                        <Switch
                            id="id_disabled_checked"
                            isDisabled={true}
                            defaultChecked={true}
                        />
                    </Flex>
                </Flex>
            </Box>
        </ThemeProvider>
    );
});
