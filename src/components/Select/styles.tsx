import { Placement } from './Select';
import { BoxProps } from '../Box/Box';

export const getPositionStyles = (placement: Placement): BoxProps => {
    switch (placement) {
        case 'top':
            return {
                top: 0,
                sx: {
                    transform: 'translateY(-100%)',
                },
            };
        case 'bottom':
        default:
            return {
                bottom: 0,
                sx: {
                    transform: 'translateY(100%)',
                },
            };
    }
};
