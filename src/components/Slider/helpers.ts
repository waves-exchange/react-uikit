import { clamp } from 'ramda';

export function valueToPercent(
    value: number,
    min: number,
    max: number
): number {
    return ((value - min) * 100) / (max - min);
}

export function percentToValue(
    percent: number,
    min: number,
    max: number
): number {
    return (max - min) * percent + min;
}

function makeValuePrecise(value: number, step: number): number {
    const stepDecimalPart = step.toString().split('.')[1];
    const stepPrecision = stepDecimalPart ? stepDecimalPart.length : 0;

    return Number(value.toFixed(stepPrecision));
}

export function roundValueToStep(value: number, step: number): number {
    return makeValuePrecise(Math.round(value / step) * step, step);
}

export function getValidValue(
    value: number,
    min: number,
    max: number,
    step?: number
): number {
    let validValue = value;

    if (step) {
        validValue = roundValueToStep(value, step);
    }

    return clamp(min, max, validValue);
}

interface CalcNewValueResult {
    clientX: number;
    left: number;
    width: number;
    min: number;
    max: number;
    step: number;
}

export function calcNewValue({
    clientX,
    left,
    width,
    min,
    max,
    step,
}: CalcNewValueResult): number {
    const diffX = clientX - left;
    const percent = diffX / width;

    return getValidValue(percentToValue(percent, min, max), min, max, step);
}
