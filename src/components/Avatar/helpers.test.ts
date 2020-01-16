import { variantSizes } from './styles';
import { getSize } from './helpers';

describe('getSize', () => {
    const props = { address: '' };

    it('returns medium variant size if no variantSize prop passed', () => {
        const expected = variantSizes['medium'];
        const actual = getSize(props);

        expect(actual).toBe(expected);
    });

    it('returns correct variant size if variantSize prop passed', () => {
        const expected = variantSizes['large'];
        const actual = getSize({ ...props, variantSize: 'large' });

        expect(actual).toBe(expected);
    });
});
