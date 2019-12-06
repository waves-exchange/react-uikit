import React from 'react';
import { BaseIcon, TBaseIconProps, TBaseIconState } from './BaseIcon';
import { styled } from '../../styled';
import { always } from 'ramda';
import { padding, margin, compose, PaddingProps, MarginProps, zIndex, position } from 'styled-system';
import { flex, display, DisplayProps, FlexProps, PositionProps, ZIndexProps } from 'styled-system';


class CloseClass extends BaseIcon<TProps, TBaseIconState> {

    protected getContent(fill: string): React.ReactElement {
        /* eslint-disable max-len */
        return (
            <g fill="none" fillRule="evenodd">
                <path fill={fill}
                    d="M16.812 2.058L9.87 9.008l6.943 6.95a.616.616 0 0 1-.869.87L9 9.877l-6.943 6.95a.614.614 0 0 1-.87-.87l6.944-6.95-6.943-6.95a.616.616 0 1 1 .869-.87L9 8.138l6.943-6.95a.614.614 0 1 1 .87.87z" />
            </g>
        );
        /* eslint-enable max-len */
    }

}

export const CloseIcon = styled(CloseClass, { shouldForwardProp: always(true) })(
    compose(
        padding,
        margin,
        zIndex,
        position,
        flex,
        display,
    )
);

type TProps = DisplayProps & FlexProps & PaddingProps & PositionProps & MarginProps & ZIndexProps & TBaseIconProps;
