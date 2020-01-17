import React from 'react';
import { render, fireEvent } from 'test-utils';
import { RadioGroup, radioGroupTestId } from './RadioGroup';
import { Radio } from '../Radio/Radio';

describe('<RadioButtonGroup>', () => {
    it('forwards style props', () => {
        const marginTop = 40;

        const { getByTestId } = render(<RadioGroup mt={marginTop} />);

        expect(getByTestId(radioGroupTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });

    it("doesn't check elements when no value prop passed", () => {
        const value1 = '1';
        const value2 = '2';

        const { getByText } = render(
            <RadioGroup>
                <Radio value={value1}>{value1}</Radio>
                <Radio value={value2}>{value2}</Radio>
            </RadioGroup>
        );

        expect(getByText(value1)).toHaveAttribute('aria-checked', 'false');
        expect(getByText(value2)).toHaveAttribute('aria-checked', 'false');
    });

    it('checks correct element, when value prop passed', () => {
        const currentValue = '2';
        const anotherValue = '1';

        const { getByText } = render(
            <RadioGroup value={currentValue}>
                <Radio value={anotherValue}>{anotherValue}</Radio>
                <Radio value={currentValue}>{currentValue}</Radio>
            </RadioGroup>
        );

        expect(getByText(currentValue)).toHaveAttribute('aria-checked', 'true');
        expect(getByText(anotherValue)).toHaveAttribute(
            'aria-checked',
            'false'
        );
    });

    it('calls onChange with correct value', () => {
        const spyOnEventTargetValue = jest.fn();
        const onChange = jest.fn(({ target: { value } }) =>
            spyOnEventTargetValue(value)
        );
        const value1 = '1';
        const value2 = '2';

        const { getByText } = render(
            <RadioGroup onChange={onChange}>
                <Radio value={value1}>{value1}</Radio>
                <Radio value={value2}>{value2}</Radio>
            </RadioGroup>
        );

        fireEvent.click(getByText(value2));

        expect(spyOnEventTargetValue).toHaveBeenCalledWith(value2);
    });
});
