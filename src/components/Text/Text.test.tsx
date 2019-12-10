import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Text } from './Text';

expect.extend(matchers);

describe('Text', () => {
    it('renders', () => {
        const { container } = render(
            <Text
                color="red"
                fontSize="15px"
                fontWeight="bold"
            >
                Test Text
            </Text>
        );

        const text = container.firstChild;

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('color', 'red');
        expect(text).toHaveStyleRule('font-size', '15px');
        expect(text).toHaveStyleRule('font-weight', 'bold');
    });

    it('truncates', () => {
        const { container } = render(
            <Text
                isTruncated={true}
            >
                Test Text
            </Text>
        );

        expect(container.firstChild).toHaveStyleRule('text-overflow', 'ellipsis');
    });
});
