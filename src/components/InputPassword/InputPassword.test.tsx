import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { ThemeProvider } from 'emotion-theming';
import { InputPassword } from './InputPassword';

expect.extend(matchers);

describe('InputPassword', () => {
    let theme: any;

    beforeEach(() => {
        theme = {
            colors: {
                basic: {},
                primary: {}
            },
            components: {
                input: {
                    sizes: {
                        medium: {

                        }
                    }
                }
            }
        };
    });

    it('renders', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <InputPassword />
            </ThemeProvider>
        );

        const input = container.querySelector('input');

        expect(input).toHaveProperty('type', 'password');
    });

    it('renders with not found variantSize', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <InputPassword variantSize={'_not_found_' as any} />
            </ThemeProvider>
        );

        const toggler = getByTestId('InputPasswordToggler');

        expect(toggler).toHaveStyleRule('width', '0');
    });

    it('handles click by eye icon', () => {
        const { container, getByTestId } = render(
            <ThemeProvider theme={theme}>
                <InputPassword />
            </ThemeProvider>
        );

        const input = container.querySelector('input');

        const toggler = getByTestId('InputPasswordToggler');

        toggler.click();

        expect(input).toHaveProperty('type', 'text');
    });
});
