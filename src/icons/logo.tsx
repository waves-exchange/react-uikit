import React from 'react';

export const iconLogo = {
    path: (
        <>
            <defs>
                <filter
                    id="a"
                    width="208%"
                    height="316%"
                    x="-54%"
                    y="-108%"
                    filterUnits="objectBoundingBox"
                >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                        stdDeviation="9"
                    />
                    <feColorMatrix
                        in="shadowBlurOuter1"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                </filter>
                <filter
                    id="c"
                    width="208%"
                    height="316%"
                    x="-54%"
                    y="-108%"
                    filterUnits="objectBoundingBox"
                >
                    <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                        stdDeviation="9"
                    />
                    <feColorMatrix
                        in="shadowBlurOuter1"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path
                    fill="#3A4050"
                    // eslint-disable-next-line max-len
                    d="M23.441 0H56.56c8.15 0 11.107.849 14.086 2.442a16.615 16.615 0 0 1 6.913 6.913C79.15 12.335 80 15.29 80 23.44V56.56c0 8.15-.849 11.107-2.442 14.086a16.615 16.615 0 0 1-6.913 6.913C67.665 79.15 64.71 80 56.56 80H23.44c-8.15 0-11.107-.849-14.086-2.442a16.615 16.615 0 0 1-6.913-6.913C.85 67.665 0 64.71 0 56.56V23.44c0-8.15.849-11.107 2.442-14.086a16.615 16.615 0 0 1 6.913-6.913C12.335.85 15.29 0 23.44 0z"
                />
                <g fillRule="nonzero">
                    <g transform="translate(15 15)">
                        <path fill="#000" d="M25 25l25 25H0z" />
                        <path fill="#5B80EA" d="M25 25l25 25H0z" />
                    </g>
                    <g transform="matrix(1 0 0 -1 15 40)">
                        <path fill="#000" d="M25 0l25 25H0z" />
                        <path fill="#E14B51" d="M25 0l25 25H0z" />
                    </g>
                </g>
            </g>
        </>
    ),
    viewBox: '0 0 80 80',
};
