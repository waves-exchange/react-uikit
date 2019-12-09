import React, { forwardRef, SVGAttributes } from 'react';
import styled from '@emotion/styled';
import { Box, IBoxProps } from '../Box/Box';

const Svg = styled(Box)({
    flexShrink: 0,
    backfaceVisibility: 'hidden',
    '&:not(:root)': {
        overflow: 'hidden'
    }
});

interface IIcon {
    path: JSX.Element;
    viewBox?: string;
}

type IconProps = Record<'icon', IIcon> & IBoxProps & SVGAttributes<SVGElement>;

export const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
    const { icon: { path, viewBox }, color, size, ...rest } = props;

    return (
        <Svg
            // eslint-disable-next-line @typescript-eslint/no-explicit-any 
            ref={ref as any}
            as="svg"
            color={color}
            size={size}
            display="inline-block"
            verticalAlign="middle"
            viewBox={viewBox}
            {...rest}
        >
            {path}
        </Svg>
    );
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
    size: 14,
    color: 'currentColor',
};
