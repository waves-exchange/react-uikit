import React from 'react';
import { render } from 'test-utils';
import { IconButton, iconButtonTestId } from './IconButton';

describe('<IconButton>', () => {
    it('renders with passed styles', () => {
        const hoverColor = 'black';
        const focusColor = 'red';
        const disabledColor = 'tomato';
        const disabledAndHoverColor = 'lightcoral';
        const _hover = { color: hoverColor };
        const _focus = { color: focusColor };
        const _disabled = { color: disabledColor };
        const _disabledAndHover = { color: disabledAndHoverColor };

        const { getByTestId } = render(
            <IconButton
                _hover={_hover}
                _focus={_focus}
                _disabled={_disabled}
                _disabledAndHover={_disabledAndHover}
            />
        );

        const iconButton = getByTestId(iconButtonTestId);

        expect(iconButton).toHaveStyleRule('color', hoverColor, {
            target: ':hover',
        });
        expect(iconButton).toHaveStyleRule('color', disabledColor, {
            target: ':disabled',
        });
        expect(iconButton).toHaveStyleRule('color', disabledAndHoverColor, {
            target: ':hover:disabled',
        });
        expect(iconButton).toHaveStyleRule('color', focusColor, {
            target: ':focus',
        });
    });
    it('forwards style prop', () => {
        const marginTop = 40;

        const { getByTestId } = render(<IconButton mt={marginTop} />);

        expect(getByTestId(iconButtonTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });
});
