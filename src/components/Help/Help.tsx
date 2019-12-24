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

class HelpComponent extends Component<TProps, IState> {
    public readonly state = { hovered: false };
    private readonly box: RefObject<HTMLDivElement> = createRef<
        HTMLDivElement
    >();
    private readonly arrow: RefObject<HTMLDivElement> = createRef<
        HTMLDivElement
    >();
    private readonly icon = createRef<SVGElement>();
    private timer: ReturnType<typeof setTimeout> | null = null;

    private static getSnapHorizontalX(
        icon: DOMRect,
        box: DOMRect,
        mode: TAlign
    ): number {
        switch (mode) {
            case 'right':
                return icon.right - box.right + 16;
            case 'center':
                return icon.x + icon.width / 2 - (box.x + box.width / 2);
            case 'left':
                return icon.left - box.left - 16;
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
                return icon.bottom - box.top + 10;
            case 'top':
                return -(box.height + 10);
            case 'left':
            case 'right':
                return icon.top + icon.height / 2 - (box.top + box.height / 2);
            default:
                throw new Error(`Align ${mode} is not supported!`);
        }
    }

    public render(): React.ReactElement {
        const hovered = this.state.hovered;
        const theme = this.props.theme;

        const content = hovered
            ? [
                  <Box
                      position="absolute"
                      ref={this.arrow}
                      border="solid 5px transparent"
                      borderBottom={`solid 5px ${theme.colors.primary.$300}`}
                  />,
                  <Box
                      position="absolute"
                      background={theme.colors.main.$700}
                      borderTop={`solid 4px ${theme.colors.primary.$300}`}
                      padding="12px 16px 16px 16px"
                      borderRadius={4}
                      overflow="hidden"
                      onMouseEnter={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}
                      ref={this.box}
                  >
                      {this.props.children}
                  </Box>,
              ]
            : null;

        return (
            <Fragment>
                <Flex
                    position="relative"
                    size="14px"
                    borderRadius="circle"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={
                        this.state.hovered ? 'primary.$300' : 'basic.$500'
                    }
                >
                    <Icon
                        sx={{
                            transform: 'translate(-50%, -50%)',
                        }}
                        position="absolute"
                        top="50%"
                        left="50%"
                        icon={iconQuestion}
                        ref={this.icon}
                        size="7px"
                        color="standard.$1000"
                        onMouseEnter={this.onMouseEnter}
                        onMouseLeave={this.onMouseLeave}
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

        const arrowX =
            iconRect.left +
            iconRect.width / 2 -
            (arrowRect.left + arrowRect.width / 2);
        const arrowY = iconRect.bottom - arrowRect.top;

        this.arrow.current!.style.transform = `translate(${arrowX}px, ${arrowY}px)`;

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
