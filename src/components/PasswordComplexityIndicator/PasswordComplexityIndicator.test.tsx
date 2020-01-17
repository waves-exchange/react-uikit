import React from 'react';
import { render } from 'test-utils';
import {
    PasswordComplexityIndicator,
    passwordComplexityIndicatorTestId,
} from './PasswordComplexityIndicator';
import * as helpers from './helpers';

describe('<PasswordComplexityIndicator>', () => {
    const password = '123456';
    const minPasswordLength = 6;

    it('renders correct password hint', () => {
        // empty password hint
        jest.spyOn(helpers, 'getPasswordHint').mockReturnValue('empty');

        const { getByText, rerender } = render(
            <PasswordComplexityIndicator
                password={password}
                minPasswordLength={minPasswordLength}
            />
        );

        getByText(`must be at least ${minPasswordLength} characters`);

        // short password hint
        jest.spyOn(helpers, 'getPasswordHint').mockReturnValue('short');

        rerender(
            <PasswordComplexityIndicator
                password={password}
                minPasswordLength={minPasswordLength}
            />
        );

        getByText(`must be at least ${minPasswordLength} characters`);

        // weak password hint
        jest.spyOn(helpers, 'getPasswordHint').mockReturnValue('weak');

        rerender(
            <PasswordComplexityIndicator
                password={password}
                minPasswordLength={minPasswordLength}
            />
        );

        getByText('weak password');

        // secure password hint
        jest.spyOn(helpers, 'getPasswordHint').mockReturnValue('secure');

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
});
