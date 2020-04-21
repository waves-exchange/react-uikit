import React, { useCallback, useEffect, useState } from 'react';
import { Box, BoxProps } from '../Box/Box';
import {
    AccordionItemProvider,
    IAccordionItemContext,
} from './AccordionItemContext';

export type IAccordionItem = BoxProps & {
    isOpen?: boolean;
    isDisabled?: boolean;
    onChange?: (isExpanded: boolean) => void;
};

export const AccordionItem: React.FC<IAccordionItem> = ({
    isOpen = false,
    isDisabled = false,
    children,
    onChange,
    ...rest
}) => {
    const [isExpanded, setIsExpanded] = useState(isOpen);

    useEffect(() => {
        setIsExpanded(isOpen);
    }, [isOpen]);

    const onToggle = useCallback(() => {
        setIsExpanded(!isExpanded);
        if (typeof onChange === 'function') {
            onChange(!isExpanded);
        }
    }, [isExpanded, onChange]);

    const context: IAccordionItemContext = {
        isExpanded,
        isDisabled,
        onToggle,
    };

    return (
        <AccordionItemProvider context={context}>
            <Box mb={10} {...rest}>
                {children}
            </Box>
        </AccordionItemProvider>
    );
};

AccordionItem.displayName = 'AccordionItem';
