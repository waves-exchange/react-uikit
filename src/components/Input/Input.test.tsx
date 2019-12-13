import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Input } from './Input';

expect.extend(matchers);

describe('Input', () => {
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
        const { container } = render(<Input theme={theme} />);

        const input = container.firstChild;

        expect(input).toHaveProperty('type', 'text');
        expect(input).toHaveStyleRule('color', 'white');
    });

    it('renders invalid', () => {
        const { container } = render(
            <Input theme={theme} aria-invalid={true} />
        );

        expect(container.firstChild).toHaveStyleRule('border-color', 'red', {
            target: '[aria-invalid="true"]',
        });
    });

    it('renders with custom padding-right', () => {
        const { container } = render(
            <Input theme={theme} paddingRight="55px" />
        );

        expect(container.firstChild).toHaveStyleRule('padding-right', '55px');
    });
});
