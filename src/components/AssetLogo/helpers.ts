import {
    add,
    always,
    contains,
    curry,
    filter,
    flip,
    head,
    identity,
    ifElse,
    isNil,
    last,
    map,
    mathMod,
    path,
    pipe,
    reduce,
    split,
    toPairs,
} from 'ramda';

const sizeProperties = ['size', 'height', 'width'];
const toArray = <T>(some: T): Array<T> => (Array.isArray(some) ? some : [some]);
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
const charCodeAt = curry((index: number, char: string) =>
    char.charCodeAt(index)
);

export const wrapWith = curry(
    (before: string, after: string, content: string) =>
        `${before}${content}${after}`
);

export const getAssetLogoBgColor = pipe(
    split(''),
    map(charCodeAt(0)),
    reduce<number, number>(add, 0),
    flip(mathMod)(GOOD_COLORS_LIST.length),
    toArray,
    flip(path)(GOOD_COLORS_LIST)
);

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
