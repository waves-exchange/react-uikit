import React from 'react';
import { SendOrReceive } from './SendOrReceive';


export function Send(props: TIconProps) {
    const fillColor = props.fillColor ?? '#FFAF00';
    const size = props.size ?? 30;

    return (
        <SendOrReceive fillColor={fillColor} size={size}/>
    );
}


type TIconProps = {
    fillColor?: string;
    size?: number;
};
