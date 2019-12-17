import React, { InputHTMLAttributes } from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { ControlBox, IControlBoxStyles } from '../ControlBox/ControlBox';
import { mergeDeepRight } from 'ramda';
import { defaultControlBoxStyles } from './styles';
import { iconCheck } from '../../assets/icons/check';

/**
 * Usage notes:
 * To customize either pass controlBoxStyles (see ControlBox component for the list of styles props)
 * or render prop ControlBox with your styles: () => <ControlBox {...styles} />
 * see storybook for examples
 */

interface CheckboxSpecificProps {
    controlBoxStyles?: IControlBoxStyles;
    controlBox?: () => React.ReactNode;
    isChecked?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

export type ICheckboxProps = CheckboxSpecificProps &
    TFlexProps &
    InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: React.FC<ICheckboxProps> = ({
    children,
    controlBox,
    controlBoxStyles = {},
    id,
    name,
    value,
    isChecked,
    defaultChecked,
    isFullWidth,
    isDisabled,
    isReadOnly,
    onChange,
    onBlur,
    onFocus,
    ...rest
}) => {
    const controlStyles = mergeDeepRight(
        defaultControlBoxStyles,
        controlBoxStyles
    ) as IControlBoxStyles;

    const { baseStyles, ...restControlStyles } = controlStyles;

    return (
        <Flex
            as="label"
            display="inline-flex"
            verticalAlign="top"
            alignItems="center"
            width={isFullWidth ? 'full' : undefined}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            {...rest}
        >
            <input
                style={{
                    border: '0px',
                    clip: 'rect(0px, 0px, 0px, 0px)',
                    height: '1px',
                    width: '1px',
                    margin: '-1px',
                    padding: '0px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                }}
                id={id}
                type="checkbox"
                name={name}
                value={value}
                onChange={isReadOnly ? undefined : onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                defaultChecked={isReadOnly ? undefined : defaultChecked}
                checked={
                    isReadOnly
                        ? Boolean(isChecked)
                        : defaultChecked
                        ? undefined
                        : isChecked
                }
                disabled={isDisabled}
                readOnly={isReadOnly}
            />
            {controlBox ? (
                controlBox()
            ) : (
                <ControlBox sx={baseStyles} {...restControlStyles}>
                    <Icon icon={iconCheck} />
                </ControlBox>
            )}
            {children}
        </Flex>
    );
};
