import React, { FC } from 'react';
import { render, fireEvent } from 'test-utils';
import {
    RadioButtonGroup,
    RadioButtonProps,
    radioButtonGroupTestId,
} from './RadioButtonGroup';
import { Button } from '../Button/Button';

const RadioButton: FC<RadioButtonProps> = ({
    checked,
    children,
    value,
    ...rest
}) => (
    <Button
        aria-checked={checked}
        variant={checked ? 'primary' : 'transparent'}
        variantSize="medium"
        {...rest}
    >
        {children}
    </Button>
);

describe('<RadioButtonGroup>', () => {
    it("doesn't render invalied elements", () => {
        const { getByTestId } = render(
            <RadioButtonGroup>text</RadioButtonGroup>
        );

        expect(getByTestId(radioButtonGroupTestId)).toBeEmpty();
    });

    it('forwards style props', () => {
        const marginTop = 40;

        const { getByTestId } = render(<RadioButtonGroup mt={marginTop} />);

        expect(getByTestId(radioButtonGroupTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });

    it("doesn't check elements when no value prop passed", () => {
        const value1 = '1';
        const value2 = '2';

        const { getByText } = render(
            <RadioButtonGroup>
                <RadioButton value={value1}>1</RadioButton>
                <RadioButton value={value2}>2</RadioButton>
            </RadioButtonGroup>
        );

        expect(getByText(value2)).toHaveAttribute('aria-checked', 'false');
        expect(getByText(value1)).toHaveAttribute('aria-checked', 'false');
    });

    it('checks correct element, when value prop passed', () => {
        const currentValue = '2';
        const anotherValue = '1';

        const { getByText } = render(
            <RadioButtonGroup value={currentValue}>
                <RadioButton value={anotherValue}>1</RadioButton>
                <RadioButton value={currentValue}>2</RadioButton>
            </RadioButtonGroup>
        );

        expect(getByText(currentValue)).toHaveAttribute('aria-checked', 'true');
        expect(getByText(anotherValue)).toHaveAttribute(
            'aria-checked',
            'false'
        );
    });

    it('calls onChange with correct value', () => {
        const onChange = jest.fn();
        const value1 = '1';
        const value2 = '2';

        const { getByText } = render(
            <RadioButtonGroup onChange={onChange}>
                <RadioButton value={value1}>1</RadioButton>
                <RadioButton value={value2}>2</RadioButton>
            </RadioButtonGroup>
        );

        fireEvent.click(getByText(value2));

        expect(onChange).toHaveBeenCalledWith(value2);
    });
});
