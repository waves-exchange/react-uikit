import React from 'react';
import { config, create } from 'identity-img';
import { styled } from '../../styled';
import { always, isNil, omit } from 'ramda';
import { sizes } from './styles';

config({ rows: 8, cells: 8 });

const getSize: (data: IProps) => number = ({ size }) =>
    isNil(size) ? sizes.medium : sizes[size];

const AvatarFunction: React.FC<IProps> = (props) => (
    <img
        src={create(props.address, { size: getSize(props) })}
        {...omit(['address', 'size'], props)}
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

interface IProps {
    size?: TAvatarSizes;
    address: string;
}

type TAvatarSizes = keyof typeof sizes;
