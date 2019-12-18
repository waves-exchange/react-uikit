import React from 'react';
import { Box } from '../..';
import styled from '@emotion/styled';

export const Tooltip: React.FC = ({ children }) => {
    return (
        <Box
            position="absolute"
            display="flex"
            left="50%"
            bottom={-8}
            sx={{ transform: 'translate(-50%, 100%)' }}
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

const Corner = styled(Box)({
    width: 10,
    height: 10,
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(45deg)',
    backgroundColor: '#555D6D',
});
