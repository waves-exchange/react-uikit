import React, { ElementType, FC } from 'react';
import { Text, TTextVariant } from 'components/Text/Text';
import { TTextProps } from 'components/Text/Text';

type HeadingLevel = 1 | 2;

export type HeadingProps = TTextProps & {
    level?: HeadingLevel;
};

export const Heading: FC<HeadingProps> = ({ level, children, ...rest }) => (
    <Text
        as={`h${String(level)}` as ElementType}
        m={0}
        variant={`heading${level}` as TTextVariant}
        {...rest}
    >
        {children}
    </Text>
);

Heading.defaultProps = {
    level: 1,
};
