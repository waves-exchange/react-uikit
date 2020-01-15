import React, { useCallback, useState, FC } from 'react';

import { LightCopy } from './LightCopy';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { iconCopy } from '../../icons/copy';
import { Tooltip } from '../Tooltip/Tooltip';
import { BoxProps } from '../Box/Box';

type CopyProps = BoxProps & {
    text: string;
    inititialTooltipLabel: string;
    copiedTooltipLabel: string;
    onTextCopy?(text: string): void;
};

export const iconTestId = 'copy-icon';

export const Copy: FC<CopyProps> = ({
    children,
    inititialTooltipLabel,
    copiedTooltipLabel,
    onTextCopy,
    text,
    ...rest
}) => {
    const [resetTimeout, setResetTimeout] = useState(-1);
    const [label, setLabel] = useState(inititialTooltipLabel);

    const handleClick = useCallback<(copiedText: string) => void>(() => {
        clearTimeout(resetTimeout);

        setLabel(copiedTooltipLabel);
        onTextCopy && onTextCopy(text);

        setResetTimeout(
            window.setTimeout(() => {
                setLabel(inititialTooltipLabel);
            }, 4000)
        );
    }, [
        copiedTooltipLabel,
        inititialTooltipLabel,
        onTextCopy,
        resetTimeout,
        text,
    ]);

    return (
        <LightCopy text={text} onTextCopy={handleClick} {...rest}>
            <Tooltip
                label={label}
                fontSize="$11"
                px="6px"
                py="3px"
                color="standard.$0"
                backgroundColor="main.$500"
                hasArrow={true}
                arrowSize="4px"
                arrowColor="main.$500"
                placement="bottom"
                borderRadius="$4"
                offset={2}
                showDelay={200}
            >
                <Flex
                    sx={{
                        cursor: 'pointer',
                        ':hover': {
                            '& > svg': {
                                color: 'primary.$300',
                            },
                            backgroundColor: 'basic.$900',
                        },
                    }}
                    display="inline-flex"
                    position="relative"
                    py={2}
                    px={4}
                    ml={-4}
                    borderRadius="$4"
                    alignItems="center"
                >
                    {children}
                    <Icon
                        data-testid={iconTestId}
                        color="basic.$500"
                        icon={iconCopy}
                        ml={children ? '5px' : 0}
                    />
                </Flex>
            </Tooltip>
        </LightCopy>
    );
};
