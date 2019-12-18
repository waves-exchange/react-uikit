import React from 'react';
import { storiesOf } from '@storybook/react';
import { Copy } from './Copy';
import { Box, defaultTheme, Text, Flex } from '../..';
import { ThemeProvider } from 'emotion-theming';

const stories = storiesOf('Copy', module);

stories.add('simple', () => {
    const onCopy = (text: string, result: boolean) => console.log(text, result);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                backgroundColor="main.$800"
                height="100vh"
                p={20}
                sx={{
                    WebkitFontSmoothing: 'antialiased',
                }}
            >
                <Flex mb={20} flexDirection="column" alignItems="flex-start">
                    <Text color="standard.$0" lineHeight={1.5}>
                        Icon
                    </Text>
                    <Copy toCopyText="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7" />
                </Flex>

                <Flex mb={20} flexDirection="column" alignItems="flex-start">
                    <Text color="standard.$0" lineHeight={1.5}>
                        Icon and Text
                    </Text>
                    <Copy
                        toCopyText="3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj"
                        text="3PCAB4sHXgvtu5NPoen6EXR5yaNbvsEA8Fj"
                        onCopy={onCopy}
                    />
                </Flex>
            </Box>
        </ThemeProvider>
    );
});
