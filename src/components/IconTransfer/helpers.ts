import { MAX_ALIAS_LENGTH } from '../../constants';
import { TTransferIconParams } from './IconTransfer';
import { TUser } from '../../interface';

const isAlias = (recipient: string): boolean => {
    return recipient.length <= MAX_ALIAS_LENGTH;
};

const getAlias = (nodeAlias: string): string => {
    return nodeAlias.replace(/alias:.:/, '');
};

export type IconTransferType = 'send' | 'receive' | 'circular';

type GetIcon = (tx: TTransferIconParams, user: TUser) => IconTransferType;

export const getIconType: GetIcon = (tx, user) => {
    const isSenderMe =
        tx.senderPublicKey == null || tx.senderPublicKey === user.publicKey;

    const alias = getAlias(tx.recipient);

    if (isAlias(alias)) {
        return isSenderMe
            ? user.aliases.includes(alias)
                ? 'circular'
                : 'send'
            : 'receive';
    } else {
        return isSenderMe
            ? tx.recipient === user.address
                ? 'circular'
                : 'send'
            : 'receive';
    }
};
