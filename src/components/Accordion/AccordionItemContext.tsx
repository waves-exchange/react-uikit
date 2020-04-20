import React, { createContext, FC } from 'react';

export interface IAccordionItemContext {
    isExpanded: boolean;
    isDisabled: boolean;
    onToggle: () => void;
}

interface IAccordionItemProvider {
    context: IAccordionItemContext;
}

export const AccordionItemContext = createContext<IAccordionItemContext>({
    isExpanded: false,
    isDisabled: false,
    onToggle: () => void 0,
});

export const AccordionItemProvider: FC<IAccordionItemProvider> = ({
    context,
    children,
}) => {
    return (
        <AccordionItemContext.Provider value={context}>
            {children}
        </AccordionItemContext.Provider>
    );
};
