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
    maxWidth?: string;
    color?: string;
    contentBefore?: () => React.ReactElement | undefined;
    contentAfter?: () => React.ReactElement | undefined;
};

export const Help: FC<HelpProps> = ({
    align,
    direction = 'auto',
    maxWidth = '320px',
    color = 'primary.$300',
    contentBefore,
    contentAfter,
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
                borderColor={color}
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
        [children, color]
    );

    const hasContentBefore = useMemo(
        () => typeof contentBefore === 'function',
        [contentBefore]
    );

    return (
        <Tooltip
            label={tooltipContentFactory}
            placement={placement}
            hasArrow={true}
            arrowSize="4px"
            arrowColor={color}
            arrowPadding={align === 'center' ? 0 : 16}
            offset={offset}
            showDelay={500}
            interactive={true}
            maxWidth={maxWidth}
        >
            <Flex
                alignItems="center"
                cursor="pointer"
                sx={{
                    ':hover > div:nth-of-type(1)': {
                        backgroundColor: hasContentBefore
                            ? 'transparent'
                            : color,
                    },
                    ':hover > div:nth-of-type(2)': {
                        backgroundColor: hasContentBefore
                            ? color
                            : 'basic.$700',
                    },
                }}
            >
                {typeof contentBefore === 'function' && (
                    <Box>{contentBefore()}</Box>
                )}
                <Flex
                    size="14px"
                    borderRadius="circle"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="basic.$700"
                >
                    <Icon
                        icon={iconQuestion}
                        size="8px"
                        color="standard.$1000"
                    />
                </Flex>
                {typeof contentAfter === 'function' && (
                    <Box>{contentAfter()}</Box>
                )}
            </Flex>
        </Tooltip>
    );
};

Help.displayName = 'Help';
