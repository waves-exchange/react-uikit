import React from 'react';
import { render } from 'test-utils';
import { Popper } from './Popper';
import { Options } from '@popperjs/core';
import { mergeOptions } from './helpers';

describe('<Popper />', () => {
    const anchorEl = document.createElement('div');
    const text = 'text';

    document.body.appendChild(anchorEl);

    describe('prop: isOpen', () => {
        it('should be visible when "true"', () => {
            const { getByText } = render(
                <Popper anchorEl={anchorEl} isOpen={true}>
                    {text}
                </Popper>
            );

            getByText(text);
        });
        it('should not be visible when "false"', () => {
            const { queryByText } = render(
                <Popper anchorEl={anchorEl} isOpen={false}>
                    {text}
                </Popper>
            );

            expect(queryByText(text)).toBeNull();
        });
    });

    it('forwards style props', () => {
        const marginTop = 40;

        const { queryByText } = render(
            <Popper anchorEl={anchorEl} isOpen={true} mt={marginTop}>
                {text}
            </Popper>
        );

        expect(queryByText(text)).toHaveStyle(`margin-top: ${marginTop}px`);
    });

    describe('helpers', () => {
        describe('mergeOptions', () => {
            const baseOptions: Partial<Options> = {
                placement: 'left',
                strategy: 'absolute',
                modifiers: [{ name: 'test-modifier' }],
            };
            const modifierOptions = { arrowPadding: 5, offset: [0, 8] };

            it('merges options correctrly', () => {
                expect(
                    mergeOptions(
                        baseOptions,
                        modifierOptions,
                        document.createElement('div')
                    )
                ).toMatchInlineSnapshot(`
                    Object {
                      "modifiers": Array [
                        Object {
                          "name": "test-modifier",
                        },
                        Object {
                          "enabled": true,
                          "name": "arrow",
                          "options": Object {
                            "element": <div />,
                            "padding": 5,
                          },
                        },
                        Object {
                          "name": "offset",
                          "options": Object {
                            "offset": Array [
                              0,
                              8,
                            ],
                          },
                        },
                      ],
                      "placement": "left",
                      "strategy": "absolute",
                    }
                `);
            });

            it('merges options correctrly, when no anchorEl passed', () => {
                expect(mergeOptions(baseOptions, modifierOptions, undefined))
                    .toMatchInlineSnapshot(`
                    Object {
                      "modifiers": Array [
                        Object {
                          "name": "test-modifier",
                        },
                        Object {
                          "enabled": false,
                          "name": "arrow",
                          "options": Object {
                            "element": undefined,
                            "padding": 5,
                          },
                        },
                        Object {
                          "name": "offset",
                          "options": Object {
                            "offset": Array [
                              0,
                              8,
                            ],
                          },
                        },
                      ],
                      "placement": "left",
                      "strategy": "absolute",
                    }
                `);
            });
        });
    });
});
