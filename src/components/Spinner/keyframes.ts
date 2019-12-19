import { keyframes } from '@emotion/core';

export const around = keyframes`
    0% {
        transform: rotate(0);
    }

    15% {
        transform: rotate(180deg);
    }

    50% {
        transform: rotate(180deg);
    }

    65% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const sand = keyframes`
    0% {
        transform: translateY(0);
    }

    10% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-100%);
    }

    60% {
        transform: translateY(-100%);
    }

    90% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(0);
    }
`;
