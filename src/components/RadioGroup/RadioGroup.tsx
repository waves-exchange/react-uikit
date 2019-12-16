import React, {
    Children,
    cloneElement,
    FC,
    InputHTMLAttributes,
    isValidElement,
    useState,
    ChangeEvent,
} from 'react';
import { Flex } from '../Flex/Flex';

type RadioGroupProps = {
    direction?: 'row' | 'column';
    name?: string;
    value?: string;
    onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
};

export const RadioGroup: FC<RadioGroupProps> = ({
    children,
    direction,
    name,
    value,
    onChange,
}) => {
    const [_value, _setValue] = useState(value || null);
    const _onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        _setValue(e.currentTarget.value);

        if (typeof onChange === 'function') {
            onChange(e);
        }
    };

    return (
        <Flex flexDirection={direction} role="radiogroup">
            {Children.map(children, (child) =>
                isValidElement(child)
                    ? cloneElement(child, {
                          name,
                          checked: child.props.value === _value,
                          'aria-checked': child.props.value === _value,
                          onChange: _onChange,
                      })
                    : null
            )}
        </Flex>
    );
};

RadioGroup.defaultProps = {
    direction: 'row',
};
