import React, { FC, PropsWithChildren } from 'react';
import { Box } from '../Box/Box';

export const InputGroup: FC<PropsWithChildren<{}>> = ({ children }) => (
    <Box display="flex" position="relative">
        {children}
    </Box>
);
