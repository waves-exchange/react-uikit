import React from 'react';
import { render } from 'test-utils';
import {
    IconTransfer,
    transferIconSendTestId,
    transferIconCircularTestId,
    transferIconReceiveTestId,
} from './IconTransfer';

import * as helpers from './helpers';

const mockIcon = (icon: helpers.IconTransferType): void => {
    jest.spyOn(helpers, 'getIconType').mockReturnValue(icon);
};
const restoreMockIcon = (): void => {
    jest.spyOn(helpers, 'getIconType').mockRestore();
};

describe('<IconTransfer>', () => {
    const tx = {} as any;
    const user = {} as any;

    it('renders circular icon', () => {
        mockIcon('circular');

        const { getByTestId } = render(<IconTransfer tx={tx} user={user} />);

        getByTestId(transferIconCircularTestId);

        restoreMockIcon();
    });
    it('renders receive icon', () => {
        mockIcon('receive');

        const { getByTestId } = render(<IconTransfer tx={tx} user={user} />);

        getByTestId(transferIconReceiveTestId);

        restoreMockIcon();
    });

    it('renders send icon', () => {
        mockIcon('send');

        const { getByTestId } = render(<IconTransfer tx={tx} user={user} />);

        getByTestId(transferIconSendTestId);

        restoreMockIcon();
    });

    it('forwards style prop', () => {
        mockIcon('send');

        const marginTop = 40;

        const { getByTestId } = render(
            <IconTransfer mt={marginTop} tx={tx} user={user} />
        );

        expect(getByTestId(transferIconSendTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );

        restoreMockIcon();
    });
});
