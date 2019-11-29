import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Button
                data-testid="button"
            >
                Test Button
            </Button>
        );

        const button = getByTestId('button');

        expect(button).toHaveProperty('textContent', 'Test Button');
        expect(button).toHaveProperty('type', 'button');
    });
});
