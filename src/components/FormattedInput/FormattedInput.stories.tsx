import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Text } from '../Text/Text';
import { FormattedInput } from './FormattedInput';

const stories = storiesOf('FormattedInput', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="main.$800"
            color="standard.$0"
        >
            <Box mb="$30">
                <label>
                    <Flex flexDirection="column" mb="$5">
                        <Text>separator: "&nbsp;"</Text>
                        <Text>decimals: 0</Text>
                    </Flex>
                    <FormattedInput
                        formatSeparator=" "
                        decimals={0}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ): void => {
                            console.log(event);
                        }}
                    />
                </label>
            </Box>
            <Box mb="$30">
                <label>
                    <Flex flexDirection="column" mb="$5">
                        <Text>separator: ","</Text>
                        <Text>decimals: 2</Text>
                        <Text>maxValue: 10000</Text>
                    </Flex>
                    <FormattedInput
                        formatSeparator=","
                        decimals={2}
                        maxValue={10000}
                    />
                </label>
            </Box>
            <Box mb="$30">
                <label>
                    <Flex flexDirection="column" mb="$5">
                        <Text>separator: ","</Text>
                        <Text>decimals: 2</Text>
                        <Text>prefix: &asymp; </Text>
                    </Flex>
                    <FormattedInput
                        formatSeparator=","
                        decimals={2}
                        prefix="&asymp; "
                    />
                </label>
            </Box>
            <Box mb="$30">
                <label>
                    <Flex flexDirection="column" mb="$5">
                        <Text>separator: ","</Text>
                        <Text>decimals: 10</Text>
                        <Text>lengthLimit: 10</Text>
                    </Flex>
                    <FormattedInput
                        formatSeparator=","
                        decimals={2}
                        lengthLimit={10}
                    />
                </label>
            </Box>
        </Box>
    </ThemeProvider>
));
