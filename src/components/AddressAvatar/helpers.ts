export const getShortAddress = (address: string): string =>
    `${address.slice(0, 8)}***${address.slice(-8)}`;
