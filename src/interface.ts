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
