import { isNil } from 'ramda';
import { variantSizes } from './styles';
import { TAvatarSizes } from './Avatar';
import { IIcon } from '../Icon/Icon';
import { iconLedgerMini } from '../../icons/ledgerMini';
import { iconSmartMini } from '../../icons/smartMini';
import { iconWavesKeeperMini } from '../../icons/wavesKeeperMini';

type GetSize = (variantSize?: TAvatarSizes) => number;

export const getSize: GetSize = (variantSize) =>
    isNil(variantSize) ? variantSizes['medium'] : variantSizes[variantSize];

type GetIconProps = {
    isSmart: boolean;
    isWavesKeeper: boolean;
    isLedger: boolean;
};

type GetIconResult = IIcon | null;

export const getIcon = ({
    isSmart,
    isWavesKeeper,
    isLedger,
}: GetIconProps): GetIconResult => {
    if (isSmart) {
        return iconSmartMini;
    }

    if (isLedger) {
        return iconLedgerMini;
    }

    if (isWavesKeeper) {
        return iconWavesKeeperMini;
    }

    return null;
};
