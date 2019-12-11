import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Text } from './Text';
import { defaultTheme } from '../../themes/default';

expect.extend(matchers);

describe('Text', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Text
                theme={defaultTheme}
                data-testid="text"
                color="red"
                fontSize="15px"
                fontWeight="bold"
            >
                Test Text
            </Text>
        );

        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('color', 'red');
        expect(text).toHaveStyleRule('font-size', '15px');
        expect(text).toHaveStyleRule('font-weight', 'bold');
    });

    it('truncates', () => {
        const { getByTestId } = render(
            <Text data-testid="text" isTruncated={true}>
                Test Text
            </Text>
        );

        const text = getByTestId('text');

        expect(text).toHaveStyleRule('text-overflow', 'ellipsis');
    });
});
