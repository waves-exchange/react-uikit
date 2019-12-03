import React from 'react';


export function Logo(props: TProps) {
    const size = props.size ?? 80;
    return (
        <div style={{ width: `${size}px`, height: `${size}px` }}>LOGO</div>
    );
}


type TProps = {
    size?: number;
};
