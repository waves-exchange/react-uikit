import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { InputGroup } from './InputGroup';

expect.extend(matchers);

describe('InputGroup', () => {
    it('renders with children', () => {
        const { container } = render(<InputGroup>test</InputGroup>);

        expect(container.children[0]).toHaveProperty('textContent', 'test');
        expect(container.children[0]).toHaveStyleRule('position', 'relative');
    });
});
