import React from 'react';
import { storiesOf } from '@storybook/react';
import { StatusLabel } from './StatusLabel';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Flex } from '../Flex/Flex';

const stories = storiesOf('StatusLabel', module);

stories.add('simple', () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box backgroundColor="main.$800" height="100vh" p={24}>
                <Flex flexDirection="column">
                    <Flex flexDirection="row" alignItems="center" mb={24}>
                        <StatusLabel text="gateway" />
                        <StatusLabel text="suspicious" variant="error" />
                        <StatusLabel text="warning" variant="warning" />
                        <StatusLabel text="complited" variant="success" />
                    </Flex>

                    <Flex flexDirection="row" alignItems="center" mb={24}>
                        <StatusLabel text="gateway" size="medium" />
                        <StatusLabel
                            text="suspicious"
                            variant="error"
                            size="medium"
                        />
                        <StatusLabel
                            text="warning"
                            variant="warning"
                            size="medium"
                        />
                        <StatusLabel
                            text="complited"
                            variant="success"
                            size="medium"
                        />
                    </Flex>

                    <Flex flexDirection="row" alignItems="center">
                        <StatusLabel>
                            <Text>Gateway</Text>
                        </StatusLabel>
                        <StatusLabel
                            ml={14}
                            py={14}
                            px={8}
                            width={100}
                            height={100}
                            borderRadius="circle"
                            backgroundColor="basic.$300"
                        >
                            <Text
                                fontSize={24}
                                lineHeight="24px"
                                color="success.$500"
                            >
                                Custom
                            </Text>
                        </StatusLabel>
                    </Flex>
                </Flex>
            </Box>
        </ThemeProvider>
    );
});
