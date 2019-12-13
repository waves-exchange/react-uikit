import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Switch } from './Switch';
import { ThemeProvider } from 'emotion-theming';

expect.extend(matchers);

describe('Switch', () => {
    let theme: any;

    beforeEach(() => {
        theme = {
            colors: {
                main: {
                    $200: '#697284',
                    $300: '#555D6D',
                    $600: '#3A4050',
                    $800: '#292F3C',
                    $900: '#19202E',
                },
                primary: {
                    $300: '#5A81EA',
                },
            },
        };
    });

    it('renders input', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Switch />
            </ThemeProvider>
        );

        const input = container.querySelector('input');

        expect(input).toHaveProperty('type', 'checkbox');
    });

    it('renders control styles prop', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Switch />
            </ThemeProvider>
        );
        const control = container.querySelector('div');

        expect(control).toHaveStyleRule('background-color', '#555D6D');
        expect(control).toHaveStyleRule('border-color', '#555D6D');
    });

    it('renders control styles prop :checked', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Switch />
            </ThemeProvider>
        );
        const control = container.querySelector('div');
        const controlClassName = control ? control.className : '';

        expect(control).toHaveStyleRule('background-color', '#5A81EA', {
            target: `input[type=checkbox]:checked + .${controlClassName}`,
        });
        expect(control).toHaveStyleRule('border-color', '#5A81EA', {
            target: `input[type=checkbox]:checked + .${controlClassName}`,
        });
    });

    it('renders control styles prop :disabled', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <Switch />
            </ThemeProvider>
        );
        const control = container.querySelector('div');
        const controlClassName = control ? control.className : '';

        expect(control).toHaveStyleRule('background-color', '#3A4050', {
            target: `input[type=checkbox]:disabled + .${controlClassName}`,
        });
        expect(control).toHaveStyleRule('border-color', '#3A4050', {
            target: `input[type=checkbox]:disabled + .${controlClassName}`,
        });
    });
});
