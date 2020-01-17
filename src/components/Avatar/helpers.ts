import { isNil } from 'ramda';
import { variantSizes } from './styles';
import { AvatarProps } from './Avatar';

type GetSize = (data: AvatarProps) => number;

export const getSize: GetSize = ({ variantSize }) =>
    isNil(variantSize) ? variantSizes['medium'] : variantSizes[variantSize];
