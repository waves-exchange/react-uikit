import styled from '@emotion/styled';
import { Box } from '../Box/Box';
import { css } from '@styled-system/css';
import { InputSize, inputSizeVariants } from '../Input/Input';

type Props = {
    placement: 'left' | 'right';
    inputSize?: InputSize;
};

export const InputElement = styled(Box)<Props>(({ placement, inputSize }) =>
    css({
        position: 'absolute',
        height: inputSize ? inputSizeVariants[inputSize].height : 0,
        top: 0,
        [placement]: 0,
    })
);

InputElement.defaultProps = {
    inputSize: 'medium',
    placement: 'left',
};
