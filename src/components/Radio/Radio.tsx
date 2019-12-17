import { mergeDeepRight } from 'ramda';
import React, { FC, InputHTMLAttributes } from 'react';
import { ControlBox, IControlBoxStyles } from '../ControlBox/ControlBox';
import { Flex, TFlexProps } from '../Flex/Flex';
import { defaultControlBoxStyles } from './styles';

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
            />

            {!customControlBox && (
                <ControlBox
                    type="radio"
                    sx={baseStyles}
                    {...restControlStyles}
                />
            )}

            {children}
        </Flex>
    );
};
