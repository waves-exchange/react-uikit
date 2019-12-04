import React from 'react';


export function Close(props: TProps) {
    const size = props.size ?? 18;
    const color = props.color ?? '#D8D8D8';
    /* eslint-disable max-len */
    return (
        <svg width={size} height={size} viewBox="0 0 18 18">
            <g fill="none" fillRule="evenodd">
                <path fill={color}
                      d="M16.812 2.058L9.87 9.008l6.943 6.95a.616.616 0 0 1-.869.87L9 9.877l-6.943 6.95a.614.614 0 0 1-.87-.87l6.944-6.95-6.943-6.95a.616.616 0 1 1 .869-.87L9 8.138l6.943-6.95a.614.614 0 1 1 .87.87z"/>
            </g>
        </svg>
    );
    /* eslint-enable max-len */
}

type TProps = {
    size?: number;
    color?: string;
};
