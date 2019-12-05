import React, { Component, createRef, Fragment, RefObject } from 'react';
import { Help as Icon, HelpClass } from '../Icons/Help';
import { Box } from 'components/Box/Box';
import { TDefaultTheme } from 'src/interface';
import { withTheme } from 'emotion-theming';


class HelpComponent extends Component<TProps, TState> {

    public readonly state = { hovered: false };
    private readonly box: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    private readonly arrow: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    private readonly icon: RefObject<HelpClass> = createRef<HelpClass>();
    private timer: ReturnType<typeof setTimeout> | null = null;


    private static getSnapHorizontalX(icon: DOMRect, box: DOMRect, mode: TAlign): number {
        switch (mode) {
            case 'right':
                return icon.right - box.right + 16;
            case 'center':
                return (icon.x + icon.width / 2) - (box.x + box.width / 2);
            case 'left':
                return icon.left - box.left - 16;
            default:
                throw new Error(`Align ${mode} is not supported!`);
        }
    }

    private static getSnapVerticalY(icon: DOMRect, box: DOMRect, mode: TDirection): number {
        switch (mode) {
            case 'bottom':
                return icon.bottom + 10;
            case 'top':
                return icon.bottom - (box.bottom + 10);
            case 'left':
            case 'right':
                return (icon.top + icon.height / 2) - (box.top + box.height / 2);
            default:
                throw new Error(`Align ${mode} is not supported!`);
        }
    }

    public render(): React.ReactElement {
        const hovered = true; // this.state.hovered;
        const theme = this.props.theme;

        const content = hovered ? (
            [
                <Box position={'absolute'}
                    ref={this.arrow}
                    border="solid 5px transparent"
                    borderBottom={`solid 5px ${theme.colors.blue.$300}`} />,
                <Box position={'absolute'}
                    background={theme.colors.main.$700}
                    borderTop={`solid 4px ${theme.colors.blue.$300}`}
                    padding="12px 16px 16px 16px"
                    borderRadius={4}
                    overflow="hidden"
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    ref={this.box}>{this.props.children}</Box>
            ]
        ) : null;

        return (
            <Fragment>
                <Icon ref={this.icon}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave} />
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
        console.log('Hover in');
        this.clearTimeout();
        this.setState({ hovered: true });
    };

    private readonly onMouseLeave = (): void => {
        console.log('Hover out');
        this.clearTimeout();
        this.timer = setTimeout(() => {
            console.log('hovered: false');
            this.setState({ hovered: false });
        }, 500);
    };

    private snap(): void {
        const box = this.box.current!;
        const icon = this.icon.current!.ref.current!;

        box.style.transform = '';

        const boxRect = box.getBoundingClientRect();
        const iconRect = icon.getBoundingClientRect();
        const align = this.props.align ?? 'auto';
        const direction = this.props.direction ?? 'auto';

        this.arrow.current!.style.transform = `translate(0, ${iconRect.bottom}px)`;

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

export const Help = withTheme(HelpComponent);

type TAlign = 'left' | 'center' | 'right' | 'auto';
type TDirection = 'top' | 'bottom' | 'left' | 'right' | 'auto';

type TProps = {
    direction?: TDirection;
    align?: TAlign;
    theme: TDefaultTheme;
};

type TState = {
    hovered: boolean;
};
