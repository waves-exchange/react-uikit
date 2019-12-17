import React, {
    Children,
    cloneElement,
    FC,
    isValidElement,
    useState,
    ChangeEventHandler,
} from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';

type RadioGroupProps = TFlexProps & {
    direction?: 'row' | 'column';
    name?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const RadioGroup: FC<RadioGroupProps> = ({
    children,
    direction,
    name,
    value,
    onChange,
    ...rest
}) => {
    const [_value, _setValue] = useState(value || null);
    const _onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        _setValue(e.currentTarget.value);

        if (typeof onChange === 'function') {
            onChange(e);
        }
    };

    return (
        <Flex flexDirection={direction} role="radiogroup" {...rest}>
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
