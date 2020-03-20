import { useState, useCallback, useEffect } from 'react';
import { Options } from '@popperjs/core';

type UseBoundedTooltip = (args: {
    left?: number; // sets padding between padding and boundary edge and the tooltip
    right?: number;
}) => {
    popperOptions: Partial<Options>;
    boundaryRef: (node: any) => void;
};

export const useBoundedTooltip: UseBoundedTooltip = ({
    left = 0,
    right = 0,
}) => {
    const [tooltipBoundingEl, setTooltipBoundingEl] = useState();
    const [popperOptions, setPopperOptions] = useState({});

    const boundaryRef = useCallback((node) => {
        if (node !== null) {
            setTooltipBoundingEl(node);
        }
    }, []);

    useEffect(
        () =>
            tooltipBoundingEl &&
            setPopperOptions({
                modifiers: [
                    {
                        name: 'preventOverflow',
                        enabled: true,
                        options: {
                            boundary: tooltipBoundingEl,
                            padding: { left, right },
                        },
                    },
                ],
            }),
        [left, right, tooltipBoundingEl]
    );

    return {
        boundaryRef,
        popperOptions,
    };
};
