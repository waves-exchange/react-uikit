import React, { FC } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { variantSizes } from './styles';

type Props = {
    img: string;
    variantSize?: keyof typeof variantSizes;
};

export const Avatar: FC<BoxProps & Props> = ({
    img,
    variantSize = 'medium',
    ...rest
}) => {
    return (
        <Box
            size={variantSizes[variantSize]}
            display="inline-block"
            borderRadius="circle"
            {...rest}
        >
            <img
                src={img}
                width="100%"
                height="100%"
                style={{ borderRadius: '9999px' }}
            />
        </Box>
    );
};
