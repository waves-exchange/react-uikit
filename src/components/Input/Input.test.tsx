import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Input } from './Input';

expect.extend(matchers);

describe('Input', () => {
    let theme: any;

    beforeEach(() => {
        theme = {
            components: {
                input: {
                    variants: {
                        default: {
                            color: 'test'
                        }
                    },
                    errorVariants: {
                        default: {
                            borderColor: 'red'
                        }
                    }
                }
            }
        };
    });

    it('renders', () => {
        const { container } = render(
            <Input
                theme={theme}
            />
        );

        const input = container.firstChild;

        expect(input).toHaveProperty('type', 'text');
        expect(input).toHaveStyleRule('color', 'test');
    });

    it('renders invalid', () => {
        const { container } = render(
            <Input
                theme={theme}
                invalid={true}
            />
        );

        expect(container.firstChild).toHaveStyleRule('border-color', 'red');
    });

    it('renders invalid with empty variant', () => {
        const { container } = render(
            <Input
                theme={theme}
                invalid={true}
                variant={null as any}
            />
        );

        expect(container.firstChild).toHaveStyleRule('border-color', 'red');
    });

    it('renders invalid with not found variant', () => {
        const { container } = render(
            <Input
                theme={theme}
                invalid={true}
                variant={'_not_found_' as any}
            />
        );

        expect(container.firstChild).toHaveStyleRule('border-color', 'red');
    });

    it('renders with custom padding-right', () => {
        const { container } = render(
            <Input
                theme={theme}
                paddingRight="55px"
            />
        );

        expect(container.firstChild).toHaveStyleRule('padding-right', '55px');
    });
});
