import React, { FC, ReactElement } from 'react';
import { TUser } from '../../interface';
import { getIconType } from './helpers';
import { Icon, IconProps } from '../Icon/Icon';
import { iconTransferArrow } from '../../icons/transferArrow';
import { iconTransferCircle } from '../../icons/transferCircle';

export const transferIconSendTestId = 'send';
export const transferIconReceiveTestId = 'receive';
export const transferIconCircularTestId = 'circular';

type TProps = {
    tx: TTransferIconParams;
    user: TUser;
};

export type TTransferIconParams = {
    type: 4;
    recipient: string;
    senderPublicKey?: string;
};

export const IconTransfer: FC<TProps & Omit<IconProps, 'icon'>> = ({
    tx,
    user,
    ...rest
}): ReactElement => {
    switch (getIconType(tx, user)) {
        case 'send':
            return (
                <Icon
                    icon={iconTransferArrow}
                    color="#FFAF00"
                    {...rest}
                    data-testid={transferIconSendTestId}
                />
            );
        case 'receive':
            return (
                <Icon
                    sx={{ transform: 'rotate(180deg)' }}
                    icon={iconTransferArrow}
                    color="#81C926"
                    {...rest}
                    data-testid={transferIconReceiveTestId}
                />
            );
        case 'circular':
        default:
            return (
                <Icon
                    icon={iconTransferCircle}
                    color="#EF4829"
                    {...rest}
                    data-testid={transferIconCircularTestId}
                />
            );
    }
};
