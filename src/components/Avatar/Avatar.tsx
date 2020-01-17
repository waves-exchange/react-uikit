import React from 'react';
import { config, create } from 'identity-img';
import { styled } from '../../styled';
import { always, omit } from 'ramda';
import { variantSizes } from './styles';
import { getSize } from './helpers';

config({ rows: 8, cells: 8 });

export const avatarTestId = 'avatar';

export type TAvatarSizes = keyof typeof variantSizes;

export interface AvatarProps {
    variantSize?: TAvatarSizes;
    address: string;
}

const AvatarFunction: React.FC<AvatarProps> = (props) => (
    <img
        src={create(props.address, {
            size: getSize(props) * window.devicePixelRatio,
        })}
        {...omit(['address', 'variantSize'], props)}
        data-testid={avatarTestId}
    />
);

export const Avatar = styled(AvatarFunction, {
    shouldForwardProp: always(true),
})((props) => ({
    overflow: 'hidden',
    borderRadius: '100%',
    width: `${getSize(props)}px`,
    height: `${getSize(props)}px`,
}));
