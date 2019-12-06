import React, { InputHTMLAttributes } from 'react';
import { Box, IBoxProps } from '../Box/Box';
import { Icon } from '../Icon/Icon';
import { ControlBox, IControlBoxStyles } from '../ControlBox/ControlBox';
import { mergeDeepRight } from 'ramda';
import { defaultControlBoxStyles } from './styles';

interface ICheckboxProps {
    controlBoxStyles?: IControlBoxStyles;
    isChecked?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

export const Checkbox: React.FC<ICheckboxProps & IBoxProps & InputHTMLAttributes<HTMLInputElement>> = ({
    children,
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
    const controlStyles = mergeDeepRight(defaultControlBoxStyles, controlBoxStyles) as IControlBoxStyles;

    return (
        <Box
            as="label"
            display="inline-flex"
            verticalAlign="top"
            alignItems="center"
            width={isFullWidth ? 'full' : undefined}
            style={{
                cursor: isDisabled ? 'not-allowed' : 'pointer'
            }}
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
                    isReadOnly ?
                        Boolean(isChecked) :
                        defaultChecked ?
                            undefined :
                            isChecked
                } 
                disabled={isDisabled}
                readOnly={isReadOnly}
            />
            <ControlBox
                sx={controlStyles.baseStyles}
                _focus={controlStyles._focus}
                _hover={controlStyles._hover}
                _invalid={controlStyles._disabled}
                _disabled={controlStyles._disabled}
                _checked={controlStyles._checked}
                _child={controlStyles._child}
                _checkedAndChild={controlStyles._checkedAndChild}
                _checkedAndDisabled={controlStyles._checkedAndDisabled}
                _checkedAndFocus={controlStyles._checkedAndFocus}
                _checkedAndHover={controlStyles._checkedAndHover}
            >
                {children || <Icon name="check" />}
            </ControlBox>
        </Box>
    );
};
