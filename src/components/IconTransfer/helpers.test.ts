import * as helpers from './helpers';

const suitMocksFactory = (
    methodName: keyof typeof helpers,
    returnValue: any
): void => {
    beforeAll(() => {
        jest.spyOn(helpers, methodName).mockReturnValue(returnValue);
    });
    afterAll(() => {
        jest.spyOn(helpers, methodName).mockRestore();
    });
};

describe('getIconType', () => {
    const { getIconType } = helpers;
    const userAlias = 'test-alias';

    suitMocksFactory('getAlias', userAlias);

    describe('transaction recepient is alias', () => {
        suitMocksFactory('isAlias', true);

        describe('sender is me', () => {
            suitMocksFactory('isSenderMe', true);

            it('returns "circular" if user aliases has this alias', () => {
                const user = { aliases: [userAlias] } as any;

                const expected = 'circular';
                const actual = getIconType({} as any, user);

                expect(actual).toBe(expected);
            });

            it("returns 'send' if user aliases hasn't this alias", () => {
                const user = { aliases: [] } as any;

                const expected = 'send';
                const actual = getIconType({} as any, user);

                expect(actual).toBe(expected);
            });
        });

        describe('sender is not me', () => {
            suitMocksFactory('isSenderMe', false);

            it("returns 'receive'", () => {
                const expected = 'receive';
                const actual = getIconType({} as any, {} as any);

                expect(actual).toBe(expected);
            });
        });
    });

    describe('transaction recepient is not alias', () => {
        suitMocksFactory('isAlias', false);

        describe('sender is me', () => {
            suitMocksFactory('isSenderMe', true);

            it('returns "circular" if user address === transaction recepient', () => {
                const address = 'address';
                const expected = 'circular';

                const actual = getIconType(
                    { recipient: address } as any,
                    { address, aliases: [] } as any
                );

                expect(actual).toBe(expected);
            });

            it("returns 'send' if user address !== transaction recepient", () => {
                const expected = 'send';

                const actual = getIconType(
                    { recipient: '1' } as any,
                    { address: '2', aliases: [] } as any
                );

                expect(actual).toBe(expected);
            });
        });
        describe('sender is not me', () => {
            suitMocksFactory('isSenderMe', false);

            it('returns "receive"', () => {
                const expected = 'receive';

                const actual = getIconType({} as any, {} as any);

                expect(actual).toBe(expected);
            });
        });
    });
});
