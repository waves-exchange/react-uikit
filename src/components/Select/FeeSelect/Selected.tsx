import React from 'react';
import { Flex, TFlexProps } from '../../Flex/Flex';
import { Option, FeeOption } from './Option';
import { iconCloseSelect } from '../../../assets/icons/closeSelect';
import { iconOpenSelect } from '../../../assets/icons/openSelect';
import { Icon } from '../../Icon/Icon';

type TSelectedProps = TFlexProps & {
    opened: boolean;
    selected: FeeOption;
    selectedOptionStylesProps?: TFlexProps;
};

export const Selected: React.FC<TSelectedProps> = ({
    opened,
    selected,
    selectedOptionStylesProps,
    ...rest
}) => (
    <Flex
        justifyContent="space-between"
        backgroundColor="basic.$900"
        border="1px solid"
        borderColor="main.$600"
        borderRadius="$4"
        p={15}
        {...rest}
    >
        <Option {...selected} {...selectedOptionStylesProps} />
        {opened ? (
            <Icon icon={iconCloseSelect} color="primary.$300" ml={10} />
        ) : (
            <Icon icon={iconOpenSelect} color="main.$100" ml={10} />
        )}
    </Flex>
);
