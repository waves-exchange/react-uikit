import React from 'react';
import { Flex, Icon } from '../../..';
import { Option, FeeOption } from './Option';
import { iconCloseSelect } from '../../../assets/icons/closeSelect';
import { iconOpenSelect } from '../../../assets/icons/openSelect';

interface ISelectedProps {
    opened: boolean;
    selected: FeeOption;
}

export const Selected: React.FC<ISelectedProps> = ({ opened, selected }) => (
    <Flex
        justifyContent="space-between"
        backgroundColor="basic.$900"
        border="1px solid"
        borderColor="main.$600"
        borderRadius="$4"
        p={15}
    >
        <Option {...selected} />
        {opened ? (
            <Icon icon={iconCloseSelect} color="primary.$300" ml={10} />
        ) : (
            <Icon icon={iconOpenSelect} color="main.$100" ml={10} />
        )}
    </Flex>
);
