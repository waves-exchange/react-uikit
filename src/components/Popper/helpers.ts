import { Options } from '@popperjs/core';
import { PopperModifierOptions } from './Popper';

type MergeOptions = (
    options: Partial<Options>,
    modifierOptions: PopperModifierOptions,
    arrowEl: Element | undefined
) => Partial<Options>;

export const mergeOptions: MergeOptions = (
    options,
    modifierOptions,
    arrowEl
) => ({
    ...options,
    modifiers: [
        ...(options.modifiers || []),
        {
            name: 'arrow',
            enabled: Boolean(arrowEl),
            options: {
                padding: modifierOptions.arrowPadding,
                element: arrowEl,
            },
        },
        {
            name: 'offset',
            options: {
                offset: modifierOptions.offset,
            },
        },
    ],
});
