import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Flex } from './Flex';

expect.extend(matchers);

describe('Flex', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Flex data-testid="flex" />
        );

        const flex = getByTestId('flex');

        expect(flex).toHaveStyleRule('display', 'flex');
    });
});
