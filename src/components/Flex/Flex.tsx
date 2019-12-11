import React, { forwardRef } from 'react';
import { FlexboxProps } from 'styled-system';
import { Box, BoxProps } from '../Box/Box';

export type TFlexProps = BoxProps & FlexboxProps;

export const Flex = forwardRef<HTMLDivElement, TFlexProps>((props, ref) => (
    <Box ref={ref} display="flex" {...props} />
));
