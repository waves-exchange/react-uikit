import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { FormattedInput } from './FormattedInput';
import { ThemeProvider } from 'emotion-theming';

expect.extend(matchers);

describe('FormattedInput', () => {
    const theme = {
        sizes: {
            medium: '42px',
        },
        colors: {
            standard: {
                $0: 'white',
            },
            danger: {
                $300: 'red',
            },
        },
    };

    it('renders', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <FormattedInput decimals={3} formatSeparator="," />
            </ThemeProvider>
        );

        const input = container.firstChild;

        expect(input).toHaveProperty('type', 'text');
        expect(input).toHaveStyleRule('color', 'white');
    });

    let input: HTMLInputElement;

    beforeEach(() => {
        const { getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <FormattedInput
                    aria-label="formatted-input"
                    decimals={3}
                    formatSeparator=","
                />
            </ThemeProvider>
        );

        input = getByLabelText('formatted-input') as HTMLInputElement;
    });

    it('renders regular', () => {
        fireEvent.change(input, { target: { value: '123' } });
        expect(input.value).toBe('123');
    });

    it('renders separators', () => {
        fireEvent.change(input, { target: { value: '1234' } });
        expect(input.value).toBe('1,234');
    });

    it('renders dot', () => {
        fireEvent.change(input, { target: { value: '123.' } });
        expect(input.value).toBe('123.');
    });

    it('renders separators and dot', () => {
        fireEvent.change(input, { target: { value: '1234.' } });
        expect(input.value).toBe('1,234.');
    });

    it('renders separators dot and after dot', () => {
        fireEvent.change(input, { target: { value: '1234.5' } });
        expect(input.value).toBe('1,234.5');
    });

    it('renders separators dot and after dot full', () => {
        fireEvent.change(input, { target: { value: '1234.556' } });
        expect(input.value).toBe('1,234.556');
    });

    it('renders separators dot and after dot extra', () => {
        fireEvent.change(input, { target: { value: '1234.5678' } });
        expect(input.value).toBe('1,234.567');
    });

    it('decrease amount of numbers', () => {
        fireEvent.change(input, { target: { value: '1234567' } });
        fireEvent.change(input, { target: { value: '134567' } });

        expect(input.value).toBe('134,567');
    });

    // Не пашет тест, TODO сделать, чтобы работал
    // it('deletion by backspace', async () => {
    //     fireEvent.change(input, { target: { value: '123' } });
    //
    //     await wait(() => expect(input.value).toBe('123'));
    //
    //     input.focus();
    //     fireEvent.keyDown(input, {
    //         key: 'Backspace',
    //         code: 'Backspace',
    //         keyCode: 8,
    //     });
    //
    //     expect(input.value).toBe('12');
    // });

    it('renders space separators', () => {
        const { getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <FormattedInput
                    aria-label="space-input"
                    decimals={3}
                    formatSeparator=" "
                />
            </ThemeProvider>
        );

        const spaceInput = getByLabelText('space-input') as HTMLInputElement;

        fireEvent.change(spaceInput, { target: { value: '1234567' } });
        expect(spaceInput.value).toBe('1 234 567');
    });
});
