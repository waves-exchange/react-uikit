import React, { FC, ComponentProps } from 'react';
import { BoxProps } from '../Box/Box';
import { Avatar } from './Avatar';
import { config, create } from 'identity-img';
import { variantSizes } from './styles';

config({ rows: 8, cells: 8 });

type Props = Omit<ComponentProps<typeof Avatar>, 'img'> & {
    address: string;
};

export const AddressAvatar: FC<BoxProps & Props> = ({
    address,
    variantSize = 'medium',
    ...rest
}) => {
    const img = create(address, {
        size: variantSizes[variantSize] * window.devicePixelRatio,
    });

    return <Avatar img={img} variantSize={variantSize} {...rest} />;
};
