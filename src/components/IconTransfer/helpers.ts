// @ts-nocheck
import { MAX_ALIAS_LENGTH } from '../../constants';
import { TTransferIconParams } from './IconTransfer';
import { TUser } from '../../interface';

export const isAlias = (recipient: string): boolean => {
    console.log('here');

    return recipient.length <= MAX_ALIAS_LENGTH;
};

export const getAlias = (nodeAlias: string): string => {
    return nodeAlias.replace(/alias:.:/, '');
};

export const isSenderMe = (tx: TTransferIconParams, user: TUser): boolean => {
    return tx.senderPublicKey == null || tx.senderPublicKey === user.publicKey;
};

export type IconTransferType = 'send' | 'receive' | 'circular';

type GetIcon = (tx: TTransferIconParams, user: TUser) => IconTransferType;

export const getIconType: GetIcon = (tx, user) => {
    const isSenderMe_ = isSenderMe(tx, user);

    const alias = getAlias(tx.recipient);

    if (isAlias(alias)) {
        return isSenderMe_
            ? user.aliases.includes(alias)
                ? 'circular'
                : 'send'
            : 'receive';
    } else {
        return isSenderMe_
            ? tx.recipient === user.address
                ? 'circular'
                : 'send'
            : 'receive';
    }
};
