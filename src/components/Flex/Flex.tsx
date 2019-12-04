import React, { forwardRef } from 'react';
import { Box, IBoxProps } from '../Box/Box';

export const Flex = forwardRef<HTMLDivElement, IBoxProps>((props, ref) => (
    <Box
        ref={ref}
        display="flex"
        {...props}
    />
));
