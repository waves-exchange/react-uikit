import React from 'react';
import { Box } from '../..';

const Corner: React.FC = () => (
    <Box
        width={10}
        height={10}
        position="absolute"
        top={0}
        left="50%"
        backgroundColor="main.$300"
        sx={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}
    ></Box>
);

export const Tooltip: React.FC = ({ children }) => {
    return (
        <Box
            sx={{
                whiteSpace: 'nowrap',
                transform: 'translate(-50%, 100%)',
            }}
            position="absolute"
            display="flex"
            left="50%"
            bottom={-8}
            py="$3"
            px="$5"
            backgroundColor="main.$300"
            borderRadius="$2"
            zIndex={10}
        >
            {children}
            <Corner />
        </Box>
    );
};
