import React, { Component, createRef, Fragment, RefObject } from 'react';
import { Box } from '../Box/Box';
import { TDefaultTheme } from '../../interface';
import { withTheme } from 'emotion-theming';
import {
    padding,
    compose,
    margin,
    MarginProps,
    PaddingProps,
} from 'styled-system';
import { styled } from '../../styled';
import { Icon } from '../Icon/Icon';
import { iconQuestion } from '../../icons/question';
import { Flex } from '../Flex/Flex';

const yOffset = 10;
const xOffset = 16;

class HelpComponent extends Component<TProps, IState> {
    public readonly state = { hovered: false };
    private readonly box: RefObject<HTMLDivElement> = createRef<
        HTMLDivElement
    >();
    private readonly arrow: RefObject<HTMLDivElement> = createRef<
        HTMLDivElement
    >();
    private readonly icon = createRef<HTMLDivElement>();
    private timer: ReturnType<typeof setTimeout> | null = null;

    private static getSnapHorizontalX(
        icon: DOMRect,
        box: DOMRect,
        mode: TAlign
    ): number {
        switch (mode) {
            case 'right':
                return Math.round(icon.right - box.right) + xOffset;
            case 'center':
                return Math.round(
                    icon.x + icon.width / 2 - (box.x + box.width / 2)
                );
            case 'left':
                return Math.round(icon.left - box.left) - xOffset;
            default:
                throw new Error(`Align ${mode} is not supported!`);
        }
    }

    private static getSnapVerticalY(
        icon: DOMRect,
        box: DOMRect,
        mode: TDirection
    ): number {
        switch (mode) {
            case 'bottom':
                return Math.round(icon.bottom - box.top) + yOffset;
            case 'top':
                return -(
                    Math.round(box.height / 2 + icon.height / 2) + yOffset
                );
            case 'left':
            case 'right':
                return Math.round(
                    icon.top + icon.height / 2 - (box.top + box.height / 2)
                );
            default:
                throw new Error(`Align ${mode} is not supported!`);
        }
    }

    public render(): React.ReactElement {
        const hovered = this.state.hovered;
        const { theme, direction } = this.props;

        const content = hovered ? (
            <>
                <Box
                    position="absolute"
                    ref={this.arrow}
                    border="solid 6px transparent"
                    borderBottom={`solid 6px ${theme.colors.primary.$300}`}
                />
                <Box
                    position="absolute"
                    background={theme.colors.main.$700}
                    sx={this.getBoxBorder(direction, theme)}
                    padding="12px 16px 16px 16px"
                    borderRadius={4}
                    overflow="hidden"
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    ref={this.box}
                >
                    {this.props.children}
                </Box>
            </>
        ) : null;

        return (
            <Fragment>
                <Flex
                    position="relative"
                    size="14px"
                    borderRadius="circle"
                    justifyContent="center"
                    alignItems="center"
                    ref={this.icon}
                    backgroundColor={
                        this.state.hovered ? 'primary.$300' : 'basic.$500'
                    }
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                    <Icon
                        sx={{
                            transform: 'translate(-50%, -50%)',
                        }}
                        position="absolute"
                        top="50%"
                        left="50%"
                        icon={iconQuestion}
                        size="7px"
                        color="standard.$1000"
                    />
                </Flex>
                {content}
            </Fragment>
        );
    }

    public componentDidUpdate(): void {
        if (!this.state.hovered) {
            return void 0;
        }
        this.snap();
    }

    private readonly onMouseEnter = (): void => {
        this.clearTimeout();
        this.setState({ hovered: true });
    };

    private readonly onMouseLeave = (): void => {
        this.clearTimeout();
        this.timer = setTimeout(() => {
            this.setState({ hovered: false });
        }, 500);
    };

    private snap(): void {
        const box = this.box.current!;
        const icon = this.icon.current!;
        const arrow = this.arrow.current!;

        box.style.transform = '';
        arrow.style.transform = '';

        const boxRect = box.getBoundingClientRect();
        const iconRect = icon.getBoundingClientRect();
        const arrowRect = arrow.getBoundingClientRect();
        const align = this.props.align ?? 'auto';
        const direction = this.props.direction ?? 'auto';

        const arrowX = Math.round(
            iconRect.left +
                iconRect.width / 2 -
                (arrowRect.left + arrowRect.width / 2)
        );

        const arrowY =
            direction === 'bottom'
                ? Math.round(iconRect.bottom - arrowRect.top)
                : Math.round(iconRect.top - arrowRect.bottom);

        const arrowScale = direction === 'bottom' ? '1' : '-1';

        this.arrow.current!.style.transform = `translate(${arrowX}px, ${arrowY}px) scale(${arrowScale})`;

        const x = HelpComponent.getSnapHorizontalX(iconRect, boxRect, align);
        const y = HelpComponent.getSnapVerticalY(iconRect, boxRect, direction);

        box.style.transform = `translate(${x}px, ${y}px)`;
    }

    private clearTimeout(): void {
        if (this.timer != null) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

    private readonly getBoxBorder = (
        direction: TDirection = 'bottom',
        theme: TDefaultTheme
    ) => ({
        [direction === 'bottom'
            ? 'borderTop'
            : 'borderBottom']: `solid 4px ${theme.colors.primary.$300}`,
    });
}

export const Help = styled(
    withTheme(HelpComponent),
    {}
)(compose(margin, padding));

type TAlign = 'left' | 'center' | 'right' | 'auto';
type TDirection = 'top' | 'bottom' | 'left' | 'right' | 'auto';

type TProps = MarginProps &
    PaddingProps & {
        direction?: TDirection;
        align?: TAlign;
        theme: TDefaultTheme;
    };

interface IState {
    hovered: boolean;
}
