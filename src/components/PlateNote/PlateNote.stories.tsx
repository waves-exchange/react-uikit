import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { PlateNote } from './PlateNote';
import { Text } from '../Text/Text';
import { Flex } from '../Flex/Flex';

const stories = storiesOf('PlateNote', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            backgroundColor="main.$800"
            height="100vh"
            p={10}
            fontSize="$12"
            color="standard.$0"
        >
            Default type ('info')
            <Box mt="8px" mb="16px">
                {/* eslint-disable-next-line max-len */}
                <PlateNote text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST." />
            </Box>
            Type 'info', custom text props
            <Box mt="8px" mb="16px">
                <PlateNote
                    text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                    textProps={{ color: 'warning.$500' }}
                />
            </Box>
            Type 'primary-info'
            <Box mt="8px" mb="16px">
                <PlateNote
                    type="primary-info"
                    text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                />
            </Box>
            Type 'warning'
            <Box mt="8px" mb="16px">
                <PlateNote
                    type="warning"
                    text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                />
            </Box>
            Type 'error'
            <Box mt="8px" mb="16px">
                <PlateNote
                    type="error"
                    text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                />
            </Box>
            With children
            <Box mt="8px" mb="16px">
                <PlateNote>
                    <Text color="basic.$300" fontSize="$13" lineHeight="$18">
                        1. You can buy USDN with your bank card or by direct
                        transfer to the Advanced Cash account.
                    </Text>
                    <Flex mt={10}>
                        <Text
                            color="basic.$300"
                            fontSize="$13"
                            lineHeight="$18"
                        >
                            2.&nbsp;
                        </Text>
                        <Text
                            color="basic.$300"
                            fontSize="$13"
                            lineHeight="$18"
                            fontWeight="bold"
                        >
                            The fee is 0%.
                        </Text>
                    </Flex>
                </PlateNote>
            </Box>
        </Box>
    </ThemeProvider>
));
