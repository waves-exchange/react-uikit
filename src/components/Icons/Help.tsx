import React, { Component } from 'react';
import styled from '@emotion/styled';
import { compose, margin, MarginProps, padding, PaddingProps } from 'styled-system';
import { always, omit } from 'ramda';
import { useTheme } from 'emotion-theming';
import { TDefaultTheme } from 'src/interface';


class HelpClass extends Component<TProps, TState> {

    public state = { hovered: false };

    public render(): React.ReactNode {
        const { size: sizeName, ...props } = this.props;
        const theme = useTheme<TDefaultTheme>();
        const size = theme.iconSizes[sizeName ?? 'small'];

        const color = this.state.hovered
            ? theme.icons.help.hovered
            : theme.icons.help.default;

        /* eslint-disable max-len */
        return (
            <svg onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                width={size}
                height={size}
                viewBox="0 0 14 14"
                {...omit(['onMouseEnter', 'onMouseLeave'], props)}>
                <path fill={color} fillRule="evenodd"
                    d="M0 7c0 3.864 3.136 7 7 7s7-3.136 7-7-3.136-7-7-7-7 3.136-7 7zm6.99 2.633c.214 0 .384.063.503.193a.663.663 0 0 1 .173.463.645.645 0 0 1-.175.46c-.118.125-.288.186-.502.186-.214 0-.383-.062-.5-.187a.65.65 0 0 1-.171-.46c0-.18.056-.336.17-.462.117-.13.287-.193.501-.193zm.04-6.583c.676 0 1.21.184 1.594.554.385.37.577.878.577 1.515 0 .632-.29 1.25-.867 1.856l-.558.552c-.23.256-.348.63-.348 1.128v.11H6.256l-.001-.112c.007-.42.055-.754.146-1.005.091-.252.274-.527.55-.827l.672-.693c.271-.307.405-.632.405-.979 0-.334-.085-.59-.254-.773-.167-.18-.412-.272-.744-.272-.326 0-.582.085-.774.252-.188.164-.282.383-.282.665v.11H4.801v-.112c.007-.587.22-1.066.633-1.429.411-.36.945-.54 1.596-.54z" />
            </svg>
        );
        /* eslint-enable max-len */
    }

    private readonly onMouseEnter = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
        this.setState({ hovered: true });

        if (this.props.onMouseEnter != null) {
            this.props.onMouseEnter(event);
        }
    };

    private readonly onMouseLeave = (event: React.MouseEvent<SVGSVGElement, MouseEvent>): void => {
        this.setState({ hovered: false });

        if (this.props.onMouseLeave != null) {
            this.props.onMouseLeave(event);
        }
    };

}

export const Help = styled(HelpClass, { shouldForwardProp: always(true) })(
    compose(
        padding,
        margin,
    )
);

type TProps = PaddingProps & MarginProps & {
    readonly onMouseEnter?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => unknown;
    readonly onMouseLeave?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => unknown;
    readonly size?: keyof TDefaultTheme['iconSizes'];
};

type TState = {
    hovered: boolean;
};
