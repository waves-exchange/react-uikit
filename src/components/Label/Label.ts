import styled from '@emotion/styled';
import { LabelHTMLAttributes } from 'react';
import { Text, TTextProps } from '../Text/Text';

export const Label = styled(Text)<
    LabelHTMLAttributes<HTMLLabelElement> & TTextProps
>();

Label.defaultProps = {
    as: 'label',
};

// TODO storybook
// TODO test
