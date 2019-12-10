import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { Box } from './Box';

expect.extend(matchers);

describe('Box', () => {
    it('renders', () => {
        const { container } = render(
            <Box color="red" fontSize="15px" p="20px" m="10px">
                Test Box
            </Box>
        );

        const box = container.firstChild;

        expect(box).toHaveProperty('textContent', 'Test Box');
        expect(box).toHaveStyleRule('color', 'red');
        expect(box).toHaveStyleRule('font-size', '15px');
        expect(box).toHaveStyleRule('padding', '20px');
        expect(box).toHaveStyleRule('margin', '10px');
    });
});
