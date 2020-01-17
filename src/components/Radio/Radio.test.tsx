import React, { FC } from 'react';
import { render, fireEvent } from 'test-utils';
import {
    Radio,
    radioTestId,
    radioInputTestId,
    radioControlBoxTestId,
} from './Radio';
import { IControlBoxStyles } from '../ControlBox/ControlBox';

describe('<Radio>', () => {
    const label = 'label';

    it('becomes checked on click', () => {
        const { getByLabelText, getByTestId } = render(<Radio>{label}</Radio>);

        const inputElem = getByTestId(radioInputTestId);

        expect(inputElem).not.toBeChecked();

        fireEvent.click(getByLabelText(label));

        expect(inputElem).toBeChecked();
    });

    it('merges default and passed control box styles', () => {
        const controlBoxStyles: IControlBoxStyles = {
            baseStyles: { width: 40, height: 40 },
            _hover: { backgroundColor: 'red' },
            _checked: { '::before': { backgroundColor: 'red' } },
            _disabled: { backgroundColor: 'red' },
            _checkedAndDisabled: { '::before': { backgroundColor: 'red' } },
        };
        const { getByTestId } = render(
            <Radio controlBoxStyles={controlBoxStyles}>{label}</Radio>
        );

        expect(getByTestId(radioControlBoxTestId)).toMatchSnapshot();
    });

    it('renders custom control box', () => {
        const customControlBoxText = 'test';

        const CustomControl: FC = () => <div>{customControlBoxText}</div>;

        const { getByText } = render(
            <Radio customControlBox={true}>
                <CustomControl />
            </Radio>
        );

        getByText(customControlBoxText);
    });

    describe('prop: "onChange"', () => {
        it('calls if readOnly === true', () => {
            const onChange = jest.fn();

            const { getByLabelText } = render(
                <Radio onChange={onChange} readOnly={false}>
                    {label}
                </Radio>
            );

            fireEvent.click(getByLabelText(label));

            expect(onChange).toHaveBeenCalledTimes(1);
        });

        it("doesn't call if readOnly prop === true", () => {
            const onChange = jest.fn();

            const { getByLabelText } = render(
                <Radio onChange={onChange} readOnly={true}>
                    {label}
                </Radio>
            );

            fireEvent.click(getByLabelText(label));

            expect(onChange).not.toHaveBeenCalled();
        });
    });

    describe('becomes checked when passed props', () => {
        it('readOnly !== true && defaultChecked === true', () => {
            const { getByTestId } = render(
                <Radio defaultChecked={true}>{label}</Radio>
            );

            expect(getByTestId(radioInputTestId)).toBeChecked();
        });
        it('checked === true', () => {
            const { getByTestId } = render(
                <Radio checked={true} onChange={jest.fn()}>
                    {label}
                </Radio>
            );

            expect(getByTestId(radioInputTestId)).toBeChecked();
        });
    });

    describe('becomes unchecked when passed props', () => {
        it('checked === false', () => {
            const { getByTestId } = render(
                <Radio checked={false} onChange={jest.fn()}>
                    {label}
                </Radio>
            );

            expect(getByTestId(radioInputTestId)).not.toBeChecked();
        });
    });

    it('forwards style props', () => {
        const marginTop = 40;

        const { getByTestId } = render(<Radio mt={marginTop}>{label}</Radio>);

        expect(getByTestId(radioTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });
});
