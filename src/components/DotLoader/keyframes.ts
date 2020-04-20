import { keyframes } from '@emotion/core';

export const loaderAnimation = keyframes`
      0%,
      80%,
      100% {
        box-shadow: 0 15px 0 0 #5a81ea,
        0 17px 0 0 transparent;
      }
      40% {
        box-shadow: 0 15px 0 -15px #5a81ea;
      }
`;
