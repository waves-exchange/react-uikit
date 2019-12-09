import React, { FC } from 'react';
import { Box } from '../Box/Box';

export const InputGroup: FC = ({ children }) => (
    <Box display="flex" position="relative">
        {children}
    </Box>
);
