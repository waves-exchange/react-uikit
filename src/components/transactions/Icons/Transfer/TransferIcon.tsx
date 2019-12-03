import React from 'react';
import { Send } from './Send';
import { Receive } from './Receive';
import { Circular } from './Circular';
import { TUser } from '../../../../interface';
import { MAX_ALIAS_LENGTH } from '../../../../constants';


function isAlias(recipient: string): boolean {
    return recipient.replace(/alias:.:/, '').length <= MAX_ALIAS_LENGTH;
}

function getAlias(nodeAlias: string): string {
    return nodeAlias.replace(/alias:.:/, '');
}

function getIconType(props: TProps): 'send' | 'receive' | 'circular' {
    const isSenderMe = props.tx.senderPublicKey == null || props.tx.senderPublicKey === props.user.publicKey;

    if (isAlias(props.tx.recipient)) {
        return isSenderMe
            ? props.user.aliases.includes(getAlias(props.tx.recipient))
                ? 'circular'
                : 'send'
            : 'receive';
    } else {
        return isSenderMe
            ? props.tx.recipient === props.user.address
                ? 'circular'
                : 'send'
            : 'receive';
    }
}

export const TransferIcon = (props: TProps) => {
    switch (getIconType(props)) {
        case 'send':
            return <Send {...props}/>;
        case 'receive':
            return <Receive  {...props}/>;
        case 'circular':
            return <Circular {...props}/>;
    }
};


type TProps = {
    tx: TTransferIconParams;
    user: TUser;
    fillColor?: string;
    size?: number;
};

export type TTransferIconParams = {
    type: 4;
    recipient: string;
    senderPublicKey?: string;
};
