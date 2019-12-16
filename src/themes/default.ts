import {
    colors,
    fontSizes,
    fontWeights,
    space,
    sizes,
    lineHeights,
    radii,
} from './constants';

export const defaultTheme = {
    colors,
    // fonts: {
    //     body: '-apple-system, sans-serif',
    //     heading: '-apple-system, sans-serif',
    //     monospace: 'Menlo, Consolas, monospace',
    // },
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    sizes,
    radii,
    borderWidths: [0, 1],
    breakpoints: ['576px', '768px', '992px', '1200px'],
    shadows: {
        default: '0 0 4px rgba(0, 0, 0, 0.125)',
    },
};
