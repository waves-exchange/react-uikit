import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Flex } from './Flex';

expect.extend(matchers);

describe('Flex', () => {
    it('renders', () => {
        const { container } = render(<Flex />);

        expect(container.firstChild).toHaveStyleRule('display', 'flex');
    });
});
