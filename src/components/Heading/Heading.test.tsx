import React from 'react';
import { render } from 'test-utils';
import { Heading } from './Heading';

describe('<Heading>', () => {
    const text = 'Heading';

    it('forwards style props', () => {
        const marginTop = 40;

        const { getByText } = render(<Heading mt={marginTop}>{text}</Heading>);

        expect(getByText(text)).toHaveStyle(`margin-top: ${marginTop}px`);
    });

    it('renders as tag H{level}', () => {
        const level = 2;

        const { getByText } = render(<Heading level={level}>{text}</Heading>);

        expect(getByText(text).tagName).toBe(`H${level}`);
    });
});
