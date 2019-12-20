import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Select } from '../Select/Select';
import { Box } from '../Box/Box';
import { Header } from './FeeSelect/Header';
import { List } from './FeeSelect/List';

export interface IOption {
    name: string;
    ticker: string;
    value: string;
    id: string;
}

const options: Array<IOption> = [
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
];

const stories = storiesOf('Select', module);

stories.add('simple', () => {
    const initialSelected = options.find((option) => option.id === 'WAVES');
    const [selected, setSelected] = useState<IOption>(initialSelected!);
    const onSelect = useCallback((selected) => {
        setSelected(selected);
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box backgroundColor="main.$800" height="100vh" p="$20">
                <Select
                    HeaderComponent={(opened: boolean) => (
                        <Header opened={opened} selected={selected} />
                    )}
                >
                    <List options={options} onSelect={onSelect} />
                </Select>
            </Box>
        </ThemeProvider>
    );
});
