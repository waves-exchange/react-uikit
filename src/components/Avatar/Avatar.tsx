import React from 'react';
import { config, create } from 'identity-img';
import { Box } from '../Box/Box';


config({ rows: 8, cells: 8 });


export const Avatar = (props: TProps) => {
    return (
        <Box overflow="hidden" borderRadius="circle" height={props.size} width={props.size}>
            <img src={create(props.address, { size: props.size })}
                 width={props.size}
                 height={props.size}/>
        </Box>
    );
};


type TProps = {
    size: number;
    address: string;
};

Avatar.defaultProps = {
    size: 30
};
