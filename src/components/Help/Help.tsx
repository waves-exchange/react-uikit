import React, { Component, createRef, Fragment, RefObject } from 'react';
import { Help as Icon } from '../Icons/Help';
import { Box } from 'components/Box/Box';


export class Help extends Component<TProps, TState> {

    public state = { hovered: false };
    private box: RefObject<HTMLDivElement> = createRef<HTMLDivElement>();


    public render() {
        const hovered = this.state.hovered;
        const content = hovered ? <Box ref={this.box}>{this.props.children}</Box> : null;

        return (
            <Fragment>
                <Icon />
                {content}
            </Fragment>
        );
    }
}

type TProps = {};

type TState = {
    hovered: boolean;
};
