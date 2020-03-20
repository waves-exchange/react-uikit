export const getFormattedValue = (value: string, separator: string): string => {
    if (isNaN(Number(value))) {
        return '';
    }
    const valueArr = value.toString().split('.');
    const first = valueArr[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        `$1${separator}`
    );

    if (valueArr.length === 1) {
        return first;
    } else {
        return `${first}.${valueArr[1]}`;
    }
};

export const parseFormattedValue = (
    value: string | undefined,
    separator: string
): string => {
    const findSeparators = new RegExp(separator, 'g');

    return value ? value.replace(findSeparators, '') : '';
};

export const handleDots = (value: string, decimals: number): string => {
    const splitted = value.split('.');

    if (decimals === 0) {
        return splitted[0];
    }

    if (splitted.length > 1) {
        const afterDot = splitted[1] ? splitted[1].slice(0, decimals) : '';

        return `${splitted[0]}.${afterDot}`;
    } else {
        return value;
    }
};
