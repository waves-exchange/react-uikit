import { Placement } from '@popperjs/core';
import React, { FC, useCallback, useMemo } from 'react';
import { iconQuestion } from '../../icons/question';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';

type HelpProps = {
    direction?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
    align?: 'left' | 'center' | 'right' | 'auto';
};

export const Help: FC<HelpProps> = ({
    align,
    direction = 'auto',
    children,
}) => {
    const placement = useMemo<Placement>(() => {
        switch (align) {
            case 'left':
                return `${direction}-start` as Placement;
            case 'right':
                return `${direction}-end` as Placement;
            default:
                return direction as Placement;
        }
    }, [direction, align]);

    const offset = useMemo(() => {
        const offsetY = direction === 'top' ? 12 : 8;

        switch (align) {
            case 'left':
                return [-16, offsetY];
            case 'right':
                return [16, offsetY];
            default:
                return [0, offsetY];
        }
    }, [align, direction]);

    const tooltipContentFactory = useCallback(
        () => (
            <Box
                backgroundColor="main.$700"
                color="basic.$300"
                padding="12px 16px 16px 16px"
                borderRadius="$4"
                borderColor="primary.$300"
                borderWidth="4px"
                sx={{
                    '[data-popper-placement^="top"] &': {
                        borderBottomStyle: 'solid',
                    },
                    '[data-popper-placement^="bottom"] &': {
                        borderTopStyle: 'solid',
                    },
                    '[data-popper-placement^="left"] &': {
                        borderRightStyle: 'solid',
                    },
                    '[data-popper-placement^="right"] &': {
                        borderLeftStyle: 'solid',
                    },
                }}
            >
                {children}
            </Box>
        ),
        [children]
    );

    return (
        <Tooltip
            label={tooltipContentFactory}
            placement={placement}
            hasArrow={true}
            arrowSize="4px"
            arrowColor="primary.$300"
            arrowPadding={align === 'center' ? 0 : 16}
            offset={offset}
            showDelay={500}
            interactive={true}
        >
            <Flex
                size="14px"
                borderRadius="circle"
                justifyContent="center"
                alignItems="center"
                backgroundColor="basic.$700"
                cursor="pointer"
                sx={{
                    ':hover': {
                        backgroundColor: 'primary.$300',
                    },
                }}
            >
                <Icon icon={iconQuestion} size="8px" color="standard.$1000" />
            </Flex>
        </Tooltip>
    );
};

Help.displayName = 'Help';
