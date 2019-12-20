import { CSSObject } from '@styled-system/css';

export const TOTAL_BARS = 10;
const MIN_PASSWORD_LENGTH = 8;
const MIN_WEAK_RANK = 2;
const MAX_WEAK_RANK = 6;

export const countComplexityByReg = (
    str: string,
    regexp: RegExp,
    targetScore: number
): number => {
    const parts = str.match(regexp);

    if (!parts) {
        return 0;
    }

    let score = 0;
    const charHash = Object.create(null);

    parts.forEach((char) => {
        if (charHash[char]) {
            score += 2;
        } else {
            score += 10;
            charHash[char] = char;
        }
    });

    return Math.min(score / targetScore, 1);
};

export const countLengthComplexity = (
    length: number,
    minLength = 8
): number => {
    const targetLength = Math.round(minLength * 1.8);
    const complexity = Math.min(length / targetLength, 1);

    return length < minLength ? complexity / 2 : complexity;
};

type CountComplexyRank = (
    str: string,
    options?: { maxLength: number }
) => number;

export const countComplexityRank: CountComplexyRank = (
    str,
    options = { maxLength: 8 }
): number => {
    const complexityTokens = [
        countLengthComplexity(str.length, options.maxLength),
        countComplexityByReg(str, /[A-Z]/g, 30),
        countComplexityByReg(str, /[a-z]/g, 30),
        countComplexityByReg(str, /[0-9]/g, 30),
        countComplexityByReg(str, /\W/g, 20),
    ];
    const complexity =
        (complexityTokens.reduce((result, item) => result + item, 0) /
            complexityTokens.length) *
        100;

    return Math.round(complexity / 10);
};

const isEmply = (pw: string): boolean => pw.length === 0;
const isShort = (pw: string): boolean => pw.length < MIN_PASSWORD_LENGTH;
const isWeak = (rank: number): boolean =>
    rank >= MIN_WEAK_RANK && rank <= MAX_WEAK_RANK;
const isStrong = (rank: number): boolean => rank > MAX_WEAK_RANK;

const getBarBgColor = (pw: string, barIndex: number, rank: number): string => {
    if (isEmply(pw)) {
        return 'main.$500';
    } else if (isShort(pw) && barIndex <= rank) {
        return 'danger.$300';
    } else if (isWeak(rank) && barIndex <= rank) {
        return 'warning.$500';
    } else if (isStrong(rank) && barIndex <= rank) {
        return 'green.$500';
    } else {
        return 'main.$500';
    }
};

export const getBarStyles = (pw: string, barIndex: number): CSSObject => {
    const rank = countComplexityRank(pw);

    const styles: CSSObject = {
        flex: 1,
        height: '3px',
        ml: barIndex > 0 ? '2px' : 0,
        borderBottomLeftRadius: barIndex === 0 ? '$4' : 0,
        borderTopLeftRadius: barIndex === 0 ? '$4' : 0,
        borderBottomRightRadius: barIndex === TOTAL_BARS - 1 ? '$4' : 0,
        borderTopRightRadius: barIndex === TOTAL_BARS - 1 ? '$4' : 0,
        bg: getBarBgColor(pw, barIndex, rank),
    };

    return styles;
};

export type PasswordHint = 'empty' | 'weak' | 'short' | 'secure';

export const getPasswordHint = (pw: string): PasswordHint => {
    const rank = countComplexityRank(pw);

    if (isEmply(pw)) {
        return 'empty';
    } else if (isShort(pw)) {
        return 'short';
    } else if (isWeak(rank)) {
        return 'weak';
    } else {
        return 'secure';
    }
};

export const getPasswordHintStyles = (pw: string): CSSObject => {
    let color;

    switch (getPasswordHint(pw)) {
        case 'empty':
            color = 'main.$500';
            break;
        case 'short':
            color = 'danger.$300';
            break;
        case 'weak':
            color = 'warning.$500';
            break;
        case 'secure':
        default:
            color = 'green.$500';
            break;
    }

    return {
        pt: '3px',
        color,
        fontSize: '12px',
        lineHeight: '14px',
    };
};
