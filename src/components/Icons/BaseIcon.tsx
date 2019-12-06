import React, { Component, createRef } from 'react';
import { TDefaultTheme } from 'interface';
import omit from 'ramda/es/omit';


export abstract class BaseIcon<PROPS extends TBaseIconProps, STATE extends TBaseIconState = TBaseIconState>
    extends Component<PROPS, STATE> {

    public state = Object.assign(Object.create(null), { hovered: false });
    public ref: React.RefObject<SVGSVGElement> = createRef();


    public render(): React.ReactElement {
        const { size, fill, viewBox } = this.getIconProps();

        return (
            <svg onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                width={size}
                height={size}
                ref={this.ref}
                viewBox={viewBox}
                {...omit(['onMouseEnter', 'onMouseLeave'], this.props)}>
                {this.getContent(fill)}
            </svg>
        );
    }

    protected readonly onMouseEnter = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
        this.setState({ hovered: true });

        if (this.props.onMouseEnter != null) {
            this.props.onMouseEnter(event);
        }
    };

    protected readonly onMouseLeave = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
        this.setState({ hovered: false });

        if (this.props.onMouseLeave != null) {
            this.props.onMouseLeave(event);
        }
    };

    protected getIconProps(): { size: number; fill: string; viewBox: string } {
        const { theme } = this.props;
        const sizeName = this.props.size ?? 'medium';
        const type = this.props.type ?? 'primary';
        const viewBox = '0 0 18 18';

        const fill = this.state.hovered === true
            ? theme.components.icons.variants[type].hover.fill
            : theme.components.icons.variants[type].fill;

        const size = theme.components.icons.sizes[sizeName];

        return { size, fill, viewBox };
    }

    protected abstract getContent(fill: string): React.ReactElement | Array<React.ReactElement>;

}

export type TBaseIconProps = {
    readonly onMouseEnter?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => unknown;
    readonly onMouseLeave?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => unknown;
    readonly size?: keyof TDefaultTheme['components']['icons']['sizes'];
    readonly type?: keyof TDefaultTheme['components']['icons']['variants'];
    readonly theme: TDefaultTheme;
};

export type TBaseIconState = {
    hovered: boolean;
};

