import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import { ThemeProvider } from 'emotion-theming';
import { StatusLabel } from '../StatusLabel/StatusLabel';
import { Text } from '../Text/Text';

expect.extend(matchers);

describe('PlateNote', () => {
    let theme: any;

    beforeEach(() => {
        theme = {
            colors: {
                primary: {
                    $300: '#5A81EA',
                },
                success: {
                    $300: '#39A12C',
                    $500: '#008B55',
                },
                danger: {
                    $300: '#E5494D',
                },
                warning: {
                    $500: '#F8B700',
                },
            },
            fontSize: {
                $13: '13px',
            },
        };
    });

    it('render default StatusLabel', () => {
        const { getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <StatusLabel text="Text" aria-label="status-label" />
            </ThemeProvider>
        );

        const statusLabel = getByLabelText('status-label');
        const text = statusLabel.querySelector('span');
        const bg = statusLabel.querySelector('div');

        expect(text).toHaveStyleRule('color', '#5A81EA');
        expect(text).toHaveStyleRule('font-size', '9px');
        expect(bg).toHaveStyleRule('background-color', '#5A81EA');
    });

    it('render success StatusLabel', () => {
        const { getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <StatusLabel
                    text="Text"
                    aria-label="status-label"
                    variant="success"
                    size="medium"
                />
            </ThemeProvider>
        );

        const statusLabel = getByLabelText('status-label');
        const text = statusLabel.querySelector('span');
        const bg = statusLabel.querySelector('div');

        expect(text).toHaveStyleRule('color', '#39A12C');
        expect(bg).toHaveStyleRule('background-color', '#39A12C');
    });

    it('render custom StatusLabel', () => {
        const { getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <StatusLabel>
                    <Text
                        fontSize={24}
                        lineHeight="24px"
                        color="success.$500"
                        aria-label="text"
                    >
                        Test
                    </Text>
                </StatusLabel>
            </ThemeProvider>
        );

        const text = getByLabelText('text');

        expect(text).toHaveStyleRule('color', '#008B55');
        expect(text).toHaveStyleRule('font-size', '24px');
    });
});
