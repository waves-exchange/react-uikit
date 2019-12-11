import React, { useCallback } from 'react';
import { Checkbox, ICheckboxProps } from '../Checkbox/Checkbox';
import { ControlBox } from '../ControlBox/ControlBox';
import { controlBoxStyles } from './styles';

export const Switch: React.FC<ICheckboxProps> = (props) => {
    const controlBox = useCallback((): JSX.Element => {
        const { baseStyles, ...restControlStyles } = controlBoxStyles;

        return <ControlBox sx={baseStyles} {...restControlStyles} />;
    }, []);

    return <Checkbox {...props} controlBox={controlBox} />;
};

Switch.displayName = 'Switch';
