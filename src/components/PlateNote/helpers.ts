import { TPlateNoteType } from './PlateNote';

export const getMainColor = (
    type: TPlateNoteType
): { mainColor: string; textColor: string } => {
    switch (type) {
        case 'error': {
            return {
                mainColor: 'danger.$300',
                textColor: 'danger.$300',
            };
        }
        case 'warning': {
            return {
                mainColor: 'warning.$500',
                textColor: 'warning.$500',
            };
        }
        case 'primary-info': {
            return {
                mainColor: 'primary.$300',
                textColor: 'standard.$0',
            };
        }
        default: {
            return {
                mainColor: 'main.$500',
                textColor: 'main.$500',
            };
        }
    }
};
