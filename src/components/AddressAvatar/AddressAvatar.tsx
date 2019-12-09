import React from 'react';
import { config, create } from 'identity-img';
import { styled } from '../../styled';
import { useTheme } from 'emotion-theming';
import { always, isNil, omit } from 'ramda';
import { TDefaultTheme } from 'interface';

config({ rows: 8, cells: 8 });

const getSize: (data: IProps & { theme: TDefaultTheme }) => number = (data) =>
    isNil(data.size)
        ? data.theme.components.addressAvatar.sizes.medium
        : data.theme.components.addressAvatar.sizes[data.size];

const AvatarFunction: React.FC<IProps> = (props) => {
    const theme = useTheme<TDefaultTheme>();

    return (
        <img
            src={create(props.address, { size: getSize({ ...props, theme }) })}
            {...omit(['address', 'size', 'theme'], props)}
        />
    );
};

export const AddressAvatar = styled(AvatarFunction, {
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

type TAvatarSizes = keyof TDefaultTheme['components']['addressAvatar']['sizes'];
