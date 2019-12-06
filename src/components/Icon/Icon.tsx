import React, { forwardRef, SVGAttributes } from 'react';
import styled from '@emotion/styled';
import { Box, IBoxProps } from '../Box/Box';
import { icons, IconNames } from '../../assets/icons';

const Svg = styled(Box)`
    flex-shrink: 0;
    backface-visibility: hidden;
    &:not(:root) {
        overflow: hidden;
    }
`;

type IconProps = Record<'name', IconNames> & IBoxProps & SVGAttributes<SVGElement>;

export const Icon = forwardRef<SVGElement, IconProps>((props, ref) => {
    const { color, name, size, ...rest } = props;

    const icon = icons[name];
    const { path, viewBox: iconViewBox = '0 0 10 10' } = icon;

    return (
        <Svg
            // eslint-disable-next-line @typescript-eslint/no-explicit-any 
            ref={ref as any}
            as="svg"
            color={color}
            size={size}
            display="inline-block"
            verticalAlign="middle"
            viewBox={iconViewBox}
            {...rest}
        >
            {path}
        </Svg>
    );
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
    size: 20,
    color: 'currentColor',
};
