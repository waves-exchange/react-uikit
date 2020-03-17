import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { FormattedInput } from './FormattedInput';
import { ThemeProvider } from 'emotion-theming';

expect.extend(matchers);

describe('FormattedInput', () => {
    let theme: any;

    beforeEach(() => {
        theme = {
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
    });

    it('renders', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <FormattedInput
                    decimals={3}
                    formatSeparator=","
                    onChange={() => null}
                />
            </ThemeProvider>
        );

        const input = container.firstChild;

        expect(input).toHaveProperty('type', 'text');
        expect(input).toHaveStyleRule('color', 'white');
    });

    it('renders invalid', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <FormattedInput
                    decimals={3}
                    formatSeparator=","
                    onChange={() => null}
                    aria-invalid={true}
                />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule('border-color', 'red', {
            target: '[aria-invalid="true"]',
        });
    });

    it('renders with custom padding-right', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <FormattedInput
                    decimals={3}
                    formatSeparator=","
                    onChange={() => null}
                    paddingRight="55px"
                />
            </ThemeProvider>
        );

        expect(container.firstChild).toHaveStyleRule('padding-right', '55px');
    });
});
