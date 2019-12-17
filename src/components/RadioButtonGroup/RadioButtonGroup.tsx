import React, {
    Children,
    cloneElement,
    FC,
    isValidElement,
    useState,
} from 'react';
import { ButtonProps } from '../Button/Button';
import { Flex, TFlexProps } from '../Flex/Flex';

export type RadioButtonProps = ButtonProps & {
    checked?: boolean;
};

type RadioButtonGroupProps = TFlexProps & {
    direction?: 'row' | 'column';
    name?: string;
    value?: string;
    onChange?: (value: unknown) => void;
};

export const RadioButtonGroup: FC<RadioButtonGroupProps> = ({
    children,
    direction,
    name,
    value,
    onChange,
    ...rest
}) => {
    const [_value, _setValue] = useState(value || null);

    return (
        <Flex flexDirection={direction} role="radiogroup" {...rest}>
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    const _onClick = (): void => {
                        _setValue(child.props.value);

                        if (typeof onChange === 'function') {
                            onChange(child.props.value);
                        }
                    };

                    return cloneElement(child, {
                        name,
                        checked: child.props.value === _value,
                        'aria-checked': child.props.value === _value,
                        onClick: _onClick,
                    });
                } else {
                    return null;
                }
            })}
        </Flex>
    );
};

RadioButtonGroup.defaultProps = {
    direction: 'row',
};