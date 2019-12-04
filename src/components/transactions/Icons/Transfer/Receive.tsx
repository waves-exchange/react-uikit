import React from 'react';
import { SendOrReceive } from './SendOrReceive';


export function Receive(props: TIconProps) {
    const fillColor = props.fillColor ?? '#81C926';
    const size = props.size ?? 30;
    /* eslint-disable max-len */
    return (
        <SendOrReceive fillColor={fillColor} size={size} rotate={180}/>
    );
    /* eslint-enable max-len */
}


type TIconProps = {
    fillColor?: string;
    size?: number;
};
