import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Tabs, TabsList, Tab, TabPanels, TabPanel } from './Tabs';

const stories = storiesOf('Tabs', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="main.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs>
                    <TabsList
                        borderBottom="1px solid"
                        borderColor="main.$700"
                        mb="16px"
                    >
                        <Tab mr="32px">
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Third</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('with selected', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="main.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs selectedIndex={1}>
                    <TabsList
                        borderBottom="1px solid"
                        borderColor="main.$700"
                        mb="16px"
                    >
                        <Tab mr="32px">
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Third</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('with disabled', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="main.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs>
                    <TabsList
                        borderBottom="1px solid"
                        borderColor="main.$700"
                        mb="16px"
                    >
                        <Tab mr="32px">
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Third</Text>
                        </Tab>
                        <Tab disabled>
                            <Text variant="body1">Disabled</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                        <TabPanel>Disabled content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('with value and onChange', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="main.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs onChange={(value): void => alert(value)}>
                    <TabsList
                        borderBottom="1px solid"
                        borderColor="main.$700"
                        mb="16px"
                    >
                        <Tab mr="32px" value={'First Tab Value'}>
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab mr="32px" value={'Second Tab Value'}>
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab mr="32px" value={'Third Tab Value'}>
                            <Text variant="body1">Third</Text>
                        </Tab>
                        <Tab disabled value={'Disabled Tab Value'}>
                            <Text variant="body1">Disabled</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                        <TabPanel>Disabled content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));
