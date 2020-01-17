import { mergeDeepRight } from 'ramda';
import React, { FC, InputHTMLAttributes } from 'react';
import { ControlBox, IControlBoxStyles } from '../ControlBox/ControlBox';
import { Flex, TFlexProps } from '../Flex/Flex';
import { defaultControlBoxStyles } from './styles';
import { VISUALLY_HIDDEN_CSS } from '../../constants';

export const radioTestId = 'radio';
export const radioInputTestId = 'radio-input';
export const radioControlBoxTestId = 'radio-control-box';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> &
    TFlexProps & {
        controlBoxStyles?: IControlBoxStyles;
        customControlBox?: boolean;
    };

export const Radio: FC<RadioProps> = ({
    name,
    value,
    checked,
    disabled,
    readOnly,
    children,
    onChange,
    onBlur,
    onFocus,
    defaultChecked,
    controlBoxStyles = {},
    customControlBox,
    ...rest
}) => {
    const controlStyles = mergeDeepRight<IControlBoxStyles, IControlBoxStyles>(
        defaultControlBoxStyles,
        controlBoxStyles
    );

    const { baseStyles, ...restControlStyles } = controlStyles;

    return (
        <Flex
            as="label"
            display="inline-flex"
            verticalAlign="top"
            alignItems="center"
            sx={{ cursor: 'pointer' }}
            {...rest}
            data-testid={radioTestId}
        >
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={readOnly ? undefined : onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                defaultChecked={readOnly ? undefined : defaultChecked}
                style={VISUALLY_HIDDEN_CSS}
                data-testid={radioInputTestId}
            />

            {!customControlBox && (
                <ControlBox
                    type="radio"
                    sx={baseStyles}
                    {...restControlStyles}
                    data-testid={radioControlBoxTestId}
                />
            )}

            {children}
        </Flex>
    );
};
