import { TDefaultTheme } from 'src/interface';
import styled from '@emotion/styled';
import { Box } from '../Box/Box';
import { get } from 'styled-system';

type InputSize = keyof TDefaultTheme['components']['input']['sizes'];
type Props = {
    placement: 'left' | 'right';
    inputSize?: InputSize;
};

export const InputElement = styled(Box)<Props, TDefaultTheme>(
    ({ placement, theme, inputSize }) => ({
        position: 'absolute',
        height: inputSize ? get(theme.components.input.sizes[inputSize], 'height') : 0,
        top: 0,
        [placement]: 0
    })
);

InputElement.defaultProps = {
    inputSize: 'medium',
    placement: 'left'
};
