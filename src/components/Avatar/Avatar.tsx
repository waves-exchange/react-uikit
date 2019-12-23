import React from 'react';
import { config, create } from 'identity-img';
import { styled } from '../../styled';
import { always, isNil, omit } from 'ramda';
import { vairantSizes } from './styles';

config({ rows: 8, cells: 8 });

export type TAvatarSizes = keyof typeof vairantSizes;

interface IProps {
    variantSize?: TAvatarSizes;
    address: string;
}

const getSize: (data: IProps) => number = ({ variantSize }) =>
    isNil(variantSize) ? variantSize!['medium'] : vairantSizes[variantSize];

const AvatarFunction: React.FC<IProps> = (props) => (
    <img
        src={create(props.address, { size: getSize(props) })}
        {...omit(['address', 'variantSize'], props)}
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
