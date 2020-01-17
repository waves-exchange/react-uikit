import React from 'react';
import { render } from 'test-utils';
import {
    PasswordComplexityIndicator,
    passwordComplexityIndicatorTestId,
    barsContainerTestId,
} from './PasswordComplexityIndicator';
import * as helpers from './helpers';

describe('<PasswordComplexityIndicator>', () => {
    const password = '123456';
    const minPasswordLength = 6;

    it('renders correct password hint', () => {
        // empty password hint
        const getPasswordHintMock = jest.spyOn(helpers, 'getPasswordHint');

        getPasswordHintMock.mockReturnValueOnce('empty');

        const { getByText, rerender } = render(
            <PasswordComplexityIndicator
                password={password}
                minPasswordLength={minPasswordLength}
            />
        );

        getByText(`must be at least ${minPasswordLength} characters`);

        // short password hint
        getPasswordHintMock.mockReturnValueOnce('short');

        rerender(
            <PasswordComplexityIndicator
                password={password}
                minPasswordLength={minPasswordLength}
            />
        );

        getByText(`must be at least ${minPasswordLength} characters`);

        // weak password hint
        getPasswordHintMock.mockReturnValueOnce('weak');

        rerender(
            <PasswordComplexityIndicator
                password={password}
                minPasswordLength={minPasswordLength}
            />
        );

        getByText('weak password');

        // secure password hint
        getPasswordHintMock.mockReturnValueOnce('secure');

        rerender(
            <PasswordComplexityIndicator
                password={password}
                minPasswordLength={minPasswordLength}
            />
        );

        getByText('secure password');
    });

    it('forwards style prop', () => {
        const marginTop = 40;

        const { getByTestId } = render(
            <PasswordComplexityIndicator
                password="123456"
                minPasswordLength={6}
                mt={marginTop}
            />
        );

        expect(getByTestId(passwordComplexityIndicatorTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });

    it('renders selected amount of bars', () => {
        const numBars = 10;

        const { getByTestId } = render(
            <PasswordComplexityIndicator
                password=""
                minPasswordLength={numBars}
            />
        );

        expect(getByTestId(barsContainerTestId).childElementCount).toBe(
            numBars
        );
    });
});
