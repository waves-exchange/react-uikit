import React from 'react';
import { render } from 'test-utils';
import {
    AddressAvatar,
    addressAvatarTestId,
    copyTestId,
} from './AddressAvatar';
import * as helpers from './helpers';

const shortAddress = 'short-address';

jest.spyOn(helpers, 'getShortAddress').mockReturnValue(shortAddress);

describe('<AddressAvatar', () => {
    const address = '3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7';

    it('forwards style props', () => {
        const marginTop = 40;

        const { getByTestId } = render(
            <AddressAvatar address={address} mt={marginTop} />
        );

        expect(getByTestId(addressAvatarTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });

    it('renders name if passed', () => {
        const name = 'test';

        const { getByText } = render(
            <AddressAvatar address={address} name={name} />
        );

        getByText(name);
    });

    it('renders <Copy /> if addressWithCopy passed', () => {
        const { getByTestId } = render(
            <AddressAvatar address={address} addressWithCopy={true} />
        );

        getByTestId(copyTestId);
    });

    it('renders <Copy /> with short address if isShort passed', () => {
        const { getByTestId } = render(
            <AddressAvatar address={address} addressWithCopy={true} isShort />
        );

        expect(getByTestId(copyTestId)).toHaveTextContent(shortAddress);
    });

    it('renders with short address if isShort passed', () => {
        const { getByText } = render(
            <AddressAvatar address={address} isShort />
        );

        getByText(shortAddress);
    });
});
