import { TPlateNoteType } from './PlateNote';

export const getMainColor = (type: TPlateNoteType): string => {
    switch (type) {
        case 'error': {
            return 'danger.$300';
        }
        case 'warning': {
            return 'warning.$500';
        }
        default: {
            return 'main.$500';
        }
    }
};
