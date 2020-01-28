import { ICheckboxProps, controlBoxTestId, checkBoxTestId } from './Checkbox';

import React, { ReactNode, FC } from 'react';
import { render, fireEvent } from 'test-utils';
import { Checkbox, checkBoxInputTestId } from './Checkbox';

const defaultPropsFactory = (props: ICheckboxProps = {}): ICheckboxProps => {
    return {
        isFullWidth: false,
        isDisabled: false,
        isReadOnly: false,
        onChange: jest.fn(),
        onBlur: jest.fn(),
        onFocus: jest.fn(),
        id: 'id',
        ...props,
    };
};

describe('<Checkbox />', () => {
    const label = 'label';

    it('becomes checked on click', () => {
        const { getByLabelText, getByTestId } = render(
            <Checkbox {...defaultPropsFactory()}>{label}</Checkbox>
        );

        const inputElem = getByTestId(checkBoxInputTestId);

        expect(inputElem).not.toBeChecked();
        fireEvent.click(getByLabelText(label));
        expect(inputElem).toBeChecked();
    });

    it('renders control box with correct styles', () => {
        const { getByTestId } = render(
            <Checkbox {...defaultPropsFactory()}>{label}</Checkbox>
        );

        expect(getByTestId(controlBoxTestId)).toMatchSnapshot();
    });

    it('renders custom control box', () => {
        const customControlBoxText = 'test';

        const CustomControl: FC = () => <div>{customControlBoxText}</div>;

        const { getByText } = render(
            <Checkbox
                {...defaultPropsFactory()}
                controlBox={(): ReactNode => <CustomControl />}
            >
                {label}
            </Checkbox>
        );

        getByText(customControlBoxText);
    });

    it('forwards style props', () => {
        const marginTop = 40;

        const { getByTestId } = render(
            <Checkbox {...defaultPropsFactory()} mt={marginTop}>
                {label}
            </Checkbox>
        );

        expect(getByTestId(checkBoxTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });

    describe('prop: "isFullWidth"', () => {
        it('width 100% if "true"', () => {
            const { getByTestId } = render(
                <Checkbox {...defaultPropsFactory({ isFullWidth: true })}>
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxTestId)).toHaveStyleRule(
                'width',
                'full'
            );
        });

        it('no width if "false"', () => {
            const { getByTestId } = render(
                <Checkbox {...defaultPropsFactory({ isFullWidth: false })}>
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxTestId)).not.toHaveStyleRule(
                'width',
                'full'
            );
        });
    });

    describe('prop: "isDisabled"', () => {
        it('cursor "not-allowed" if "true"', () => {
            const { getByTestId } = render(
                <Checkbox {...defaultPropsFactory({ isDisabled: true })}>
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxTestId)).toHaveStyleRule(
                'cursor',
                'not-allowed'
            );
        });

        it('cursor "pointer" if "false"', () => {
            const { getByTestId } = render(
                <Checkbox {...defaultPropsFactory({ isDisabled: false })}>
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxTestId)).toHaveStyleRule(
                'cursor',
                'pointer'
            );
        });
    });
    describe('prop: "onChange"', () => {
        it('calls if isReadOnly !== true', () => {
            const defaultProps = defaultPropsFactory({ isReadOnly: false });
            const { onChange } = defaultProps;

            const { getByLabelText } = render(
                <Checkbox {...defaultProps}>{label}</Checkbox>
            );

            fireEvent.click(getByLabelText(label));

            expect(onChange).toHaveBeenCalledTimes(1);
        });

        it("doesn't call if isReadOnly === true", () => {
            const defaultProps = defaultPropsFactory({ isReadOnly: true });
            const { onChange } = defaultProps;

            const { getByLabelText } = render(
                <Checkbox {...defaultProps}>{label}</Checkbox>
            );

            fireEvent.click(getByLabelText(label));

            expect(onChange).not.toHaveBeenCalled();
        });
    });

    describe('becomes checked when passed props', () => {
        it('isReadOnly === true && defaultChecked === true', () => {
            const defaultChecked = true;

            const { getByTestId } = render(
                <Checkbox
                    {...defaultPropsFactory({
                        isReadOnly: false,
                        defaultChecked,
                    })}
                >
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxInputTestId)).toBeChecked();
        });

        it('isReadOnly === true && isChecked === true', () => {
            const isChecked = true;

            const { getByTestId } = render(
                <Checkbox
                    {...defaultPropsFactory({
                        isReadOnly: true,
                        isChecked,
                    })}
                >
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxInputTestId)).toBeChecked();
        });

        it('defaultIsChecked === true && isChecked === false', () => {
            const { getByTestId } = render(
                <Checkbox
                    {...defaultPropsFactory({
                        isReadOnly: false,
                        defaultChecked: true,
                        isChecked: false,
                    })}
                >
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxInputTestId)).toBeChecked();
        });
    });

    describe('becomes unchecked when passed props', () => {
        it('isReadOnly === true && defaultChecked === true', () => {
            const defaultChecked = true;

            const { getByTestId } = render(
                <Checkbox
                    {...defaultPropsFactory({
                        isReadOnly: true,
                        defaultChecked,
                    })}
                >
                    {label}
                </Checkbox>
            );

            expect(getByTestId(checkBoxInputTestId)).not.toBeChecked();
        });
    });

    it('calls "onFocus"', () => {
        const defaultProps = defaultPropsFactory();
        const { onFocus } = defaultProps;

        const { getByLabelText } = render(
            <Checkbox {...defaultProps}>{label}</Checkbox>
        );

        fireEvent.focus(getByLabelText(label));

        expect(onFocus).toHaveBeenCalled();
    });

    it('calls "onBlur"', () => {
        const defaultProps = defaultPropsFactory();
        const { onBlur } = defaultProps;

        const { getByLabelText } = render(
            <Checkbox {...defaultProps}>{label}</Checkbox>
        );

        const checkbox = getByLabelText(label);

        fireEvent.focus(checkbox);
        fireEvent.blur(checkbox);

        expect(onBlur).toHaveBeenCalled();
    });
});
