import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import React, { FC } from 'react';
import { defaultTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { RadioGroup } from './RadioGroup';
import { Radio, RadioProps } from '../Radio/Radio';
import { Text } from '../Text/Text';

const stories = storiesOf('RadioGroup', module);

const CustomRadio: FC<RadioProps> = ({
    name,
    checked,
    value,
    onChange,
    children,
}) => (
    <Radio
        name={name}
        value={value}
        onChange={onChange}
        customControlBox={true}
    >
        <Box
            aria-checked={checked}
            color={checked ? 'standard.$0' : 'standard.$1000'}
            backgroundColor={checked ? 'primary.$500' : 'warning.$500'}
            padding="$5"
        >
            {children}
        </Box>
    </Radio>
);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box marginBottom="20px">
            <Text>direction="row" (default)</Text>
            <RadioGroup name="radio1" value="2">
                <Radio value="1">Radio 1</Radio>
                <Radio value="2">Radio 2</Radio>
            </RadioGroup>
        </Box>

        <Box marginBottom="16px">
            <Text>direction="column"</Text>
            <RadioGroup name="radio2" value="2" direction="column">
                <Radio value="1" marginBottom="8px">
                    Radio 1
                </Radio>
                <Radio value="2">Radio 2</Radio>
            </RadioGroup>
        </Box>

        <Box marginBottom="16px">
            <Text>custom radio</Text>
            <RadioGroup name="radio3" value="2">
                <CustomRadio value="1" marginBottom="8px">
                    Radio 1
                </CustomRadio>
                <CustomRadio value="2">Radio 2</CustomRadio>
            </RadioGroup>
        </Box>

        <Box marginBottom="16px">
            <Text>custom radio (column)</Text>
            <RadioGroup name="radio3" value="2" direction="column">
                <CustomRadio value="1" marginBottom="8px">
                    Radio 1
                </CustomRadio>
                <CustomRadio value="2">Radio 2</CustomRadio>
            </RadioGroup>
        </Box>
    </ThemeProvider>
));
