import React from 'react';


export function Circular(props: TIconProps) {
    const fillColor = props.fillColor ?? '#EF4829';
    const size = props.size ?? 30;
    /* eslint-disable max-len */
    return (
        <svg width={size} height={size} viewBox="0 0 80 80">
            <g fill="none" fillRule="evenodd">
                <path fill="#D8D8D8"
                      fillOpacity="0" d="M0 0h80v80H0z"/>
                <path fill={fillColor}
                      d="M23.333 40c0 9.19 7.477 16.667 16.667 16.667 9.19 0 16.667-7.477 16.667-16.667 0-9.19-7.477-16.667-16.667-16.667-9.19 0-16.667 7.477-16.667 16.667zm30 0c0 7.353-5.98 13.333-13.333 13.333S26.667 47.353 26.667 40 32.647 26.667 40 26.667 53.333 32.647 53.333 40zm10-11.667c0 .92.747 1.667 1.667 1.667h13.333c.92 0 1.667-.747 1.667-1.667V15.14a1.667 1.667 0 0 0-3.333 0v9.833C67.783 8.633 55.16 0 40 0 17.943 0 0 17.943 0 40s17.943 40 40 40 40-17.943 40-40a1.667 1.667 0 0 0-3.333 0c0 20.217-16.45 36.667-36.667 36.667-20.217 0-36.667-16.45-36.667-36.667C3.333 19.783 19.783 3.333 40 3.333c17.22 0 27.763 12.194 33.81 23.334H65c-.92 0-1.667.746-1.667 1.666z"/>
            </g>
        </svg>
    );
    /* eslint-enable max-len */
}


type TIconProps = {
    fillColor?: string;
    size?: number;
};
