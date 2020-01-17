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
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="$4"
        backgroundColor="basic.$900"
        mt={5}
        sx={{
            '::-webkit-scrollbar': {
                width: 3,
            },
            '::-webkit-scrollbar-thumb': {
                backgroundColor: 'main.$200',
                borderRadius: 1.5,
                width: 3,
            },
            '::-webkit-scrollbar-track-piece': {
                marginBottom: 3,
                marginTop: 3,
            },
        }}
        maxHeight={147}
        overflowY="auto"
    >
        {options.map((option) => (
            <Box
                key={option.id}
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
