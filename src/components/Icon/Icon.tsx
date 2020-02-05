import React, { forwardRef, SVGAttributes, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { Box, BoxProps, BoxAsElement } from '../Box/Box';
import { variant } from 'styled-system';

const variants = {
    potty: { size: 10 },
    small: { size: 14 },
    medium: { size: 18 },
    large: { size: 24 },
};

type SVGBoxProps = BoxProps<SVGElement, HTMLAttributes<SVGElement>> &
    SVGAttributes<SVGElement>;

const Svg = styled(Box as BoxAsElement<'svg', SVGBoxProps>)(
    variant({
        prop: 'iconSize',
        variants,
    }),
    {
        flexShrink: 0,
        backfaceVisibility: 'hidden',
        '&:not(:root)': {
            overflow: 'hidden',
        },
    }
);

export interface IIcon {
    path: JSX.Element;
    viewBox?: string;
}

type IconSize = keyof typeof variants;

export type IconProps = SVGBoxProps & {
    icon: IIcon;
    iconSize?: IconSize;
};

export const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
    const {
        icon: { path, viewBox },
        color,
        iconSize,
        size,
        ...rest
    } = props;

    const sizeProps = {
        ...(size ? { size } : { iconSize }), // suppot sizing through variants and size prop
    };

    return (
        <Svg
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={ref as any}
            as="svg"
            color={color}
            display="inline-block"
            verticalAlign="middle"
            viewBox={viewBox}
            {...sizeProps}
            {...rest}
        >
            {path}
        </Svg>
    );
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
    iconSize: 'small',
    color: 'currentColor',
};
