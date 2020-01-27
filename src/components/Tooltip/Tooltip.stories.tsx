import React, { ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Box } from '../Box/Box';
import { Button, ButtonProps } from '../Button/Button';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';

const stories = storiesOf('Tooltip', module);

stories.add('simple', () => {
    const commonAnchorProps: ButtonProps = {
        variant: 'primary',
        display: 'inline-block',
        mt: 30,
        width: 100,
        p: 10,
    };
    const commonTooltipProps: TooltipProps = {
        p: 15,
        borderRadius: '$4',
        bg: 'tomato',
        arrowColor: 'tomato',
        placement: 'left',
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box p={20}>
                <Tooltip
                    isOpen={true}
                    label="Lorem ipsum dolor sit amet"
                    {...commonTooltipProps}
                >
                    <Button {...commonAnchorProps}>basic tooltip</Button>
                </Tooltip>

                <Tooltip
                    label="Lorem ipsum dolor sit amet"
                    isOpen={true}
                    hasArrow={true}
                    {...commonTooltipProps}
                >
                    <Button {...commonAnchorProps}>arrow tooltip</Button>
                </Tooltip>

                <Tooltip
                    label={(): ReactNode => (
                        <Box bg="black" color="white" p={15} borderRadius="$4">
                            Lorem ipsum dolor sit amet
                        </Box>
                    )}
                    {...commonTooltipProps}
                    p={0}
                    bg="none"
                    arrowColor="black"
                    hasArrow={true}
                >
                    <Button {...commonAnchorProps}>custom tooltip</Button>
                </Tooltip>

                <Tooltip
                    label="Lorem ipsum dolor sit amet"
                    hasArrow={true}
                    {...commonTooltipProps}
                >
                    <Button disabled={true} {...commonAnchorProps} mt="0px">
                        arrow tooltip
                    </Button>
                </Tooltip>
            </Box>
        </ThemeProvider>
    );
});
