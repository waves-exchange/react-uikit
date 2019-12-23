import styled from '@emotion/styled';
import { AnchorHTMLAttributes } from 'react';
import { Text, TTextProps } from '../Text/Text';

export const ExternalLink = styled(Text)<
    AnchorHTMLAttributes<HTMLLinkElement> & TTextProps
>();

ExternalLink.defaultProps = {
    as: 'a',
    display: 'inline',
    textDecoration: 'none',
    color: 'primary.$300',
    referrerPolicy: 'strict-origin',
};

// TODO storybook
// TODO test
