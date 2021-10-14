import React from 'react';
import { LightCopy } from './LightCopy';
import { fireEvent, render } from '@testing-library/react';

describe('LightCopy', () => {
    const buttonText = 'click to copy';
    const textToCopy = 'test';

    beforeAll(() => {
        Object.defineProperties(window, {
            Range: {
                value: jest.fn(() => ({
                    setStart: jest.fn(),
                    setEnd: jest.fn(),
                })),
            },
            getSelection: {
                value: jest.fn(() => ({
                    removeAllRanges: jest.fn(),
                    addRange: jest.fn(),
                })),
            },
        });

        Object.defineProperties(document, {
            execCommand: {
                value: jest.fn(),
            },
        });

        Object.defineProperties(navigator, {
            clipboard: {
                value: null,
            },
        });
    });

    it("executes document.execCommand('copy') and calls callback", () => {
        const onTextCopy = jest.fn();

        const { getByText } = render(
            <LightCopy text={textToCopy} onTextCopy={onTextCopy}>
                <button>{buttonText}</button>
            </LightCopy>
        );

        fireEvent.click(getByText(buttonText));
        expect(document.execCommand).toHaveBeenCalledWith('copy');
        expect(onTextCopy).toHaveBeenCalledWith(textToCopy);
    });
});
