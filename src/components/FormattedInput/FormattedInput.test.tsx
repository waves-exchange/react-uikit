import React from 'react';
import {
    render,
    fireEvent,
    RenderResult,
    waitForElement,
} from '@testing-library/react';
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

    const renderComaInput = (): RenderResult =>
        render(
            <ThemeProvider theme={theme}>
                <FormattedInput
                    aria-label="formatted-input"
                    decimals={3}
                    formatSeparator=","
                />
            </ThemeProvider>
        );

    const renderSpaceInput = (): RenderResult =>
        render(
            <ThemeProvider theme={theme}>
                <FormattedInput
                    aria-label="formatted-input"
                    decimals={3}
                    formatSeparator=" "
                />
            </ThemeProvider>
        );

    it('renders regular', () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '123' } });
        expect((input as HTMLInputElement).value).toBe('123');
    });

    it('renders separators', () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '1234' } });

        expect((input as HTMLInputElement).value).toBe('1,234');
    });

    it('renders dot', () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '123.' } });
        expect((input as HTMLInputElement).value).toBe('123.');
    });

    it('renders separators and dot', () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '1234.' } });

        expect((input as HTMLInputElement).value).toBe('1,234.');
    });

    it('renders separators dot and after dot', () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '1234.5' } });

        expect((input as HTMLInputElement).value).toBe('1,234.5');
    });

    it('renders separators dot and after dot full', () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '1234.556' } });

        expect((input as HTMLInputElement).value).toBe('1,234.556');
    });

    it('renders separators dot and after dot extra', () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '1234.5678' } });

        expect((input as HTMLInputElement).value).toBe('1,234.567');
    });

    it('delete numbers', async () => {
        const { getByLabelText } = renderComaInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '1234567' } });
        const elem = await waitForElement(() => input);

        fireEvent.change(elem, { target: { value: '134567' } });

        expect((input as HTMLInputElement).value).toBe('134,567');
    });

    it('renders space separators', () => {
        const { getByLabelText } = renderSpaceInput();
        const input = getByLabelText('formatted-input');

        fireEvent.change(input, { target: { value: '1234567' } });

        expect((input as HTMLInputElement).value).toBe('1 234 567');
    });
});
