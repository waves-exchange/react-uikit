import React, {
    createContext,
    FC,
    MutableRefObject,
    KeyboardEventHandler,
    FocusEventHandler,
} from 'react';

export interface SliderContextInterface {
    trackRef: MutableRefObject<HTMLDivElement> | null;
    trackPercent: number;
    isDisabled: boolean;
    onThumbKeyDown: KeyboardEventHandler<HTMLElement>;
    max: number;
    min: number;
    step: number;
    labelInterval: number;
    value: number;
    hasDefaultTooltip?: boolean;
    onFocus?: FocusEventHandler<HTMLElement>;
}

interface SliderProviderProps {
    context: SliderContextInterface;
}

export const SliderContext = createContext<SliderContextInterface>({
    trackRef: null,
    trackPercent: -1,
    isDisabled: false,
    onThumbKeyDown: () => void 0,
    value: 0,
    max: 100,
    min: 0,
    step: 1,
    labelInterval: 1,
});

export const SliderProvider: FC<SliderProviderProps> = ({
    context,
    children,
}) => {
    return (
        <SliderContext.Provider value={context}>
            {children}
        </SliderContext.Provider>
    );
};
