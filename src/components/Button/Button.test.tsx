import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders', () => {
        const { container } = render(
            <Button>
                Test Button
            </Button>
        );

        const button = container.firstChild;

        expect(button).toHaveProperty('textContent', 'Test Button');
        expect(button).toHaveProperty('type', 'button');
    });
});
