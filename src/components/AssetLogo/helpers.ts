import pipe from 'ramda/es/pipe';
import concat from 'ramda/es/concat';
import flip from 'ramda/es/flip';
import ifElse from 'ramda/es/ifElse';
import isNil from 'ramda/es/isNil';
import head from 'ramda/es/head';
import filter from 'ramda/es/filter';
import always from 'ramda/es/always';
import identity from 'ramda/es/identity';
import toPairs from 'ramda/es/toPairs';
import contains from 'ramda/es/contains';
import last from 'ramda/es/last';

const sizeProperties = ['size', 'height', 'width'];
const GOOD_COLORS_LIST = [
    '#39a12c',
    '#6a737b',
    '#e49616',
    '#008ca7',
    '#ff5b38',
    '#ff6a00',
    '#c74124',
    '#00a78e',
    '#b01e53',
    '#e0c61b',
    '#5a81ea',
    '#72b7d2',
    '#a5b5c3',
    '#81c926',
    '#86a3bd',
    '#c1d82f',
    '#5c84a8',
    '#267e1b',
    '#fbb034',
    '#ff846a',
    '#47c1ff',
    '#00a0af',
    '#85d7c6',
    '#8a7967',
    '#26c1c9',
    '#72d28b',
    '#5B1909',
    '#264764',
    '#270774',
    '#8763DE',
    '#F04085',
    '#1E6AFD',
    '#FF1E43',
    '#D3002D',
    '#967400',
    '#264163',
];

export function getAssetLogoColor(assetId: string): string {
    const sum = assetId
        .split('')
        .map((char) => char.charCodeAt(0))
        .reduce((acc, code) => acc + code, 0);

    return GOOD_COLORS_LIST[sum % GOOD_COLORS_LIST.length];
}
export const wrapToQuote = pipe(concat('"'), flip(concat)('"'));

export const getHeight = pipe(
    toPairs as (data: unknown) => [string, unknown][],
    filter(pipe(head, flip(contains)(sizeProperties))),
    head,
    ifElse(
        isNil,
        always(0),
        pipe(
            last,
            ifElse(
                isNil,
                always(0),
                pipe(
                    (height: string) => parseInt(height, 10),
                    ifElse(isNaN, always(0), identity)
                )
            )
        )
    )
);
