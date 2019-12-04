import React from 'react';
import { config, create } from 'identity-img';
import { defaultTheme } from 'themes/default';
import styled from '@emotion/styled';
import { always, prop } from 'ramda';
import { TPartialDeep } from 'interface';


config({ rows: 8, cells: 8 });


function getSize(size: TAvatarSizes, theme?: TPartialDeep<Pick<typeof defaultTheme, 'avatarSizes'>>): number {
    return prop(size, theme?.avatarSizes ?? Object.create(null)) ?? defaultTheme.avatarSizes[size];
}

const AvatarFunction = ({ address, size = 'medium', theme, ...props }: TProps) => (
    <img src={create(address, { size: getSize(size, theme) })}
         width={getSize(size, theme)}
         height={getSize(size, theme)}
         {...props}/>
);

export const Avatar = styled(AvatarFunction, { shouldForwardProp: always(true) })(
    {
        overflow: 'hidden',
        borderRadius: '100%'
    }
);

type TProps = {
    size?: TAvatarSizes;
    theme?: TPartialDeep<Pick<typeof defaultTheme, 'avatarSizes'>>;
    address: string;
};

type TAvatarSizes = keyof typeof defaultTheme.avatarSizes;
