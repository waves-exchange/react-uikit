import React, { Children, cloneElement, isValidElement, useState } from 'react';
import { Box, BoxProps } from '../Box/Box';

type TExpendedIndex = Array<number> | number;
export type TAccordion = Omit<BoxProps, 'onChange'> & {
    allowMultiple?: boolean;
    defaultIndex?: TExpendedIndex;
    onChange?: (expandedIndex?: TExpendedIndex) => void;
};

export const Accordion: React.FC<TAccordion> = ({
    allowMultiple,
    defaultIndex,
    onChange,
    children,
    ...rest
}) => {
    const initializeExpendedIndex = () => {
        if (allowMultiple) {
            return Array.isArray(defaultIndex)
                ? defaultIndex
                : defaultIndex !== undefined
                ? [defaultIndex]
                : [];
        } else {
            return Array.isArray(defaultIndex) && defaultIndex.length > 0
                ? defaultIndex[0]
                : defaultIndex !== undefined
                ? defaultIndex
                : -1;
        }
    };

    const [expandedIndex, setExpandedIndex] = useState<TExpendedIndex>(
        initializeExpendedIndex
    );

    const clones = Children.map(children, (child, index) => {
        const checkIsChildExpanded = (): boolean => {
            if (Array.isArray(expandedIndex)) {
                return expandedIndex.includes(index);
            }

            return expandedIndex === index;
        };

        if (isValidElement(child)) {
            return cloneElement(child, {
                isOpen: checkIsChildExpanded(),
                onChange: (isExpanded: boolean) => {
                    if (allowMultiple) {
                        let newIndexes;
                        const prevIndexes = Array.isArray(expandedIndex)
                            ? expandedIndex
                            : [expandedIndex];

                        if (isExpanded) {
                            newIndexes = [...prevIndexes, index];
                        } else {
                            newIndexes = prevIndexes.filter(
                                (itemIndex) => itemIndex !== index
                            );
                        }

                        setExpandedIndex(newIndexes);

                        if (typeof onChange === 'function') {
                            onChange(newIndexes);
                        }
                    } else {
                        if (isExpanded) {
                            setExpandedIndex(index);
                        } else {
                            setExpandedIndex(-1);
                        }
                        if (typeof onChange === 'function') {
                            onChange(index);
                        }
                    }
                },
            });
        } else {
            return null;
        }
    });

    return <Box {...rest}>{clones}</Box>;
};

Accordion.displayName = 'Accordion';
