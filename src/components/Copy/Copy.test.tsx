import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Copy, iconTestId } from './Copy';
import '@testing-library/jest-dom/extend-expect';

jest.mock('popper.js', () => {
    const PopperJS = jest.requireActual('popper.js');

    return class {
        static placements = PopperJS.placements;

        constructor() {
            return {
                destroy: jest.fn(),
                scheduleUpdate: jest.fn(),
            };
        }
    };
});

jest.useFakeTimers();

describe('Copy', () => {
    const testId = 'testId';
    const buttonText = 'click to copy';
    const textToCopy = 'test';
    const inititialTooltipLabel = 'Before Copy';
    const copiedTooltipLabel = 'After Copy';

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
    });

    it('shows correct tooltip text', () => {
        const { getByText } = render(
            <Copy
                data-testid={testId}
                text={textToCopy}
                inititialTooltipLabel={inititialTooltipLabel}
                copiedTooltipLabel={copiedTooltipLabel}
            >
                <button>{buttonText}</button>
            </Copy>
        );

        // Before copy has been clicked
        fireEvent.mouseOver(getByText(buttonText));
        getByText(inititialTooltipLabel);

        // After copy has been clicked
        fireEvent.click(getByText(buttonText));
        fireEvent.mouseOver(getByText(buttonText));
        getByText(copiedTooltipLabel);

        // Tooltip text has been reset after timeout
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        act(() => {
            jest.runAllTimers();
        });

        fireEvent.mouseOver(getByText(buttonText));
        getByText(inititialTooltipLabel);
    });

    it('calls callback', () => {
        const onTextCopy = jest.fn();

        const { getByText } = render(
            <Copy
                onTextCopy={onTextCopy}
                text={textToCopy}
                inititialTooltipLabel={inititialTooltipLabel}
                copiedTooltipLabel={copiedTooltipLabel}
            >
                <button>{buttonText}</button>
            </Copy>
        );

        fireEvent.click(getByText(buttonText));

        expect(onTextCopy).toHaveBeenCalledWith(textToCopy);
    });

    it('forwards style props', () => {
        const marginTop = 40;

        const { getByTestId } = render(
            <Copy
                data-testid={testId}
                text={textToCopy}
                inititialTooltipLabel={inititialTooltipLabel}
                copiedTooltipLabel={copiedTooltipLabel}
                mt={marginTop}
            >
                <button>{buttonText}</button>
            </Copy>
        );

        expect(getByTestId(testId)).toHaveStyle(`margin-top: ${marginTop}px`);
    });

    it('unsets icon margin-left for <Copy /> without label', () => {
        const marginTop = 40;

        const { getByTestId } = render(
            <Copy
                text={textToCopy}
                inititialTooltipLabel={inititialTooltipLabel}
                copiedTooltipLabel={copiedTooltipLabel}
                mt={marginTop}
            />
        );

        expect(getByTestId(iconTestId)).toHaveStyle(`margin-left: ${0}px`);
    });
});
