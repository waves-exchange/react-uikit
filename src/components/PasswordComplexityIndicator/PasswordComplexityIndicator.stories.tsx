import React, { useState, ChangeEventHandler } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { PasswordComplexityIndicator } from './PasswordComplexityIndicator';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';
import { Input } from '../Input/Input';

const stories = storiesOf('Strength Indicator', module);

stories.add('simple', () => {
    const [pw, setPw] = useState('');
    const handlePwChange: ChangeEventHandler<HTMLInputElement> = ({
        target: { value },
    }) => {
        setPw(value);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box maxWidth={520} bg="main.$800">
                <Input onChange={handlePwChange} />
                <Flex p="40px">
                    <PasswordComplexityIndicator
                        password={pw}
                        minPasswordLength={8}
                    />
                </Flex>
            </Box>
        </ThemeProvider>
    );
});
