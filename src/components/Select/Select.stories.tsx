import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Select } from '../Select/Select';
import { Box } from '../Box/Box';
import { Selected } from './FeeSelect/Selected';
import { List } from './FeeSelect/List';
import { Text } from '../Text/Text';
import { FeeOption } from './FeeSelect/Option';

const options: Array<FeeOption> = [
    {
        value: '0.01',
        ticker: 'WAVES',
        name: 'Waves',
        id: 'WAVES',
    },
    {
        value: '0.0001',
        ticker: 'Sviblovo',
        name: 'SVIBLOVO',
        id: 'Sviblovo',
    },
    {
        value: '30.2301',
        ticker: 'Fantik',
        name: 'FANTIK',
        id: 'Fantik',
    },
    {
        value: '220.23126743',
        ticker: 'Select',
        name: 'SELECT',
        id: 'Select',
    },
    {
        value: '1',
        ticker: 'ZOLOTO',
        name: 'Zoloto',
        id: 'Zoloto',
    },
];

const stories = storiesOf('Select', module);

stories.add('simple', () => {
    const initialSelected = options.find((option) => option.id === 'WAVES');

    const [selectedA, setSelectedA] = useState<FeeOption>(initialSelected!);
    const onSelectA = useCallback((selected) => {
        setSelectedA(selected);
    }, []);

    const [selectedB, setSelectedB] = useState<FeeOption>(initialSelected!);
    const onSelectB = useCallback((selected) => {
        setSelectedB(selected);
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                backgroundColor="main.$800"
                height="100vh"
                p="$20"
                color="standard.$0"
                fontSize={13}
            >
                <Text>default</Text>
                <Select
                    renderSelected={(opened: boolean) => (
                        <Selected opened={opened} selected={selectedA} />
                    )}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectA} />
                </Select>

                <Text>disabled</Text>
                <Select
                    renderSelected={(opened: boolean) => (
                        <Selected opened={opened} selected={selectedB} />
                    )}
                    isDisabled={true}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectB} />
                </Select>
            </Box>
        </ThemeProvider>
    );
});
