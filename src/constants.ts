import { CSSProperties } from 'react';

export const MAX_ALIAS_LENGTH = 30;

export const VISUALLY_HIDDEN_CSS: CSSProperties = {
    border: '0px',
    clip: 'rect(0px, 0px, 0px, 0px)',
    height: '1px',
    width: '1px',
    margin: '-1px',
    padding: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    position: 'absolute',
};
