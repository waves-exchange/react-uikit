import React from 'react';
import { render } from 'test-utils';
import { Avatar, avatarTestId } from './Avatar';
import { variantSizes } from './styles';
import * as identityImg from 'identity-img';

const mockedIdentityImg = identityImg as jest.Mocked<typeof identityImg>;
const { create, config } = mockedIdentityImg;

describe('<Avatar', () => {
    const address = '3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7';

    afterEach(() => {
        create.mockClear();
        config.mockClear();
    });

    it('identity-img correctly configured', () => {
        render(<Avatar address={address} />);
        expect(config).toHaveBeenCalledWith({ rows: 8, cells: 8 });
    });

    it('identity-img creates image with correct data', () => {
        const variantSize = 'small';

        render(<Avatar address={address} variantSize={variantSize} />);

        expect(create).toHaveBeenCalledWith(address, {
            size: variantSizes[variantSize] * window.devicePixelRatio,
        });
    });

    it('has correct width and height, when variantSize prop is passed', () => {
        const variantSize = 'small';
        const { getByTestId } = render(
            <Avatar address={address} variantSize={variantSize} />
        );

        const avatar = getByTestId(avatarTestId);

        expect(avatar).toHaveStyleRule(
            'width',
            `${variantSizes[variantSize]}px`
        );
        expect(avatar).toHaveStyleRule(
            'height',
            `${variantSizes[variantSize]}px`
        );
    });
});
