import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { InputElement } from './InputElement';

expect.extend(matchers);

describe('InputElement', () => {
    let theme: any;

    beforeEach(() => {
        theme = {
            sizes: {
                medium: '42px',
            },
        };
    });

    it('renders', () => {
        const { container } = render(
            <InputElement theme={theme} placement="left" />
        );

        expect(container.firstChild).toHaveStyleRule('height', '42px');
    });

    it('renders with left placement', () => {
        const { container } = render(
            <InputElement theme={theme} placement="left" />
        );

        expect(container.firstChild).toHaveStyleRule('left', '0');
    });

    it('renders with right placement', () => {
        const { container } = render(
            <InputElement theme={theme} placement="right" />
        );

        expect(container.firstChild).toHaveStyleRule('right', '0');
    });

    it('renders with empty inputSize', () => {
        const { container } = render(
            <InputElement
                theme={theme}
                placement="left"
                inputSize={null as any}
            />
        );

        expect(container.firstChild).toHaveStyleRule('height', '0');
    });
});
