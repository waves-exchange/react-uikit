import { Box, BoxAsElement } from '../..';
import isNil from 'ramda/es/isNil';
import ifElse from 'ramda/es/ifElse';
import prop from 'ramda/es/prop';
import pipe from 'ramda/es/pipe';
import { variants } from './styles';
import { styled } from '../../styled';
import { getAssetLogoColor } from './helpers';
import { variant } from 'styled-system';

type Props = {
    assetId: string;
    /**
     * Base64 string
     */
    logo?: string;
    /**
     * Asset name
     */
    name: string;

    size?: keyof typeof variants;
};

export const AssetLogo = styled(Box as BoxAsElement<'div', Props>)(
    {
        borderRadius: '100%',
    },
    ifElse(
        pipe(prop('logo'), isNil),
        (props) => ({
            background: getAssetLogoColor(props.assetId),
            ':before': {
                content: `"${props.name.charAt(0).toUpperCase()}"`,
                display: 'block',
                textAlign: 'center',
                fontSize: `${30 * 0.43}px`,
                color: props.theme.colors.standard.$0,
            },
        }),
        (props) => ({
            backgroundImage: `url(${props.logo})`,
            backgroundSize: '100% 100%',
        })
    ),
    variant({
        prop: 'size',
        variants,
    })
);

AssetLogo.defaultProps = {
    size: 'small',
};
