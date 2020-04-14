import * as React from 'react';
import { getMainColor } from './helpers';
import { Flex, TFlexProps } from '../Flex/Flex';
import { Text, TTextProps } from '../Text/Text';

export type TPlateNoteType = 'info' | 'warning' | 'error';

export type TPlateNote = TFlexProps & {
    type?: TPlateNoteType;
    text?: string;
    textProps?: TTextProps;
};

export const PlateNote: React.FC<TPlateNote> = ({
    type = 'info',
    text,
    textProps = {},
    children,
    ...rest
}) => {
    const mainColor = getMainColor(type);

    return (
        <Flex
            flexDirection="column"
            border="1px dashed"
            borderColor={mainColor}
            borderRadius="$4"
            p="16px"
            {...rest}
        >
            {text ? (
                <Text
                    fontSize={14}
                    lineHeight="$20"
                    color={mainColor}
                    {...textProps}
                >
                    {text}
                </Text>
            ) : null}
            {children}
        </Flex>
    );
};
