import { defaultTheme } from './themes/default';

export type TUser = {
    publicKey: string;
    address: string;
    aliases: Array<string>;
    networkByte: number;
};

export type TNetworkInfo = {
    nodeUrl: string;
    matcherUrl: string;
};

export type TPartialDeep<T> = T extends object
    ? { [Key in keyof T]?: TPartialDeep<T[Key]> }
    : T;

export type TDefaultTheme = typeof defaultTheme;
