import React, { forwardRef, SVGAttributes } from 'react';
import styled from '@emotion/styled';
import { Box, IBoxProps } from '../Box/Box';
import { variant } from 'styled-system';

const iconVariants = {
    potty: { size: 10 },
    small: { size: 14 },
    medium: { size: 18 },
    large: { size: 24 },
};

const Svg = styled(Box)<{ iconSize?: IconSize }>(
    variant({
        prop: 'iconSize',
        variants: iconVariants,
    }),
    {
        flexShrink: 0,
        backfaceVisibility: 'hidden',
        '&:not(:root)': {
            overflow: 'hidden',
        },
    }
);

interface IIcon {
    path: JSX.Element;
    viewBox?: string;
}

type IconSize = keyof typeof iconVariants;

type IconProps = Record<'icon', IIcon> & { iconSize?: IconSize } & IBoxProps &
    SVGAttributes<SVGElement>;

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
