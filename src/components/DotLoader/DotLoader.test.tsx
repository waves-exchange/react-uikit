import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { DotLoader } from './DotLoader';

expect.extend(matchers);

describe('DotLoader', () => {
    it('renders', () => {
        const { container } = render(<DotLoader />);

        const dotWrap = container.firstChild;

        expect(dotWrap).toHaveStyleRule('position', 'absolute');
        expect(dotWrap).toHaveStyleRule('width', '52px');
        expect(dotWrap).toHaveStyleRule('height', '13px');
    });
});
