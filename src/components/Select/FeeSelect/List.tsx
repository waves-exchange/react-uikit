import React from 'react';
import { Flex } from '../../Flex/Flex';
import { Box } from '../../Box/Box';
import { Option } from './Option';
import { IOption } from '../Select.stories';

interface IListProps {
    options: Array<IOption>;
    onSelect: (option: IOption) => void;
}

export const List: React.FC<IListProps> = ({ options, onSelect }) => (
    <Flex
        width={440}
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="$4"
        mt={5}
        overflow="hidden"
        sx={{ cursor: 'pointer' }}
    >
        {options.map((option) => (
            <Box
                key={option.id}
                backgroundColor="basic.$900"
                sx={{
                    ':hover': {
                        backgroundColor: 'main.$600',
                    },
                }}
                px={15}
                py={12}
                onClick={() => onSelect(option)}
            >
                <Option {...option} />
            </Box>
        ))}
    </Flex>
);
