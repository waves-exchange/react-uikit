import {
    borderWidths,
    breakpoints,
    darkThemeColors,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    shadows,
    sizes,
    space,
    transitions,
} from './constants';

const common = {
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    sizes,
    radii,
    transitions,
    borderWidths,
    breakpoints,
    shadows,
};

export const darkTheme = {
    colors: { ...darkThemeColors },
    ...common,
};

export const lightTheme = {
    colors: { ...darkThemeColors },
    ...common,
};

export const defaultTheme = { ...darkTheme };
