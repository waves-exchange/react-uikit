import css from '@styled-system/css';
import applySpec from 'ramda/es/applySpec';
import concat from 'ramda/es/concat';
import flip from 'ramda/es/flip';
import head from 'ramda/es/head';
import ifElse from 'ramda/es/ifElse';
import isNil from 'ramda/es/isNil';
import multiply from 'ramda/es/multiply';
import pipe from 'ramda/es/pipe';
import prop from 'ramda/es/prop';
import toUpper from 'ramda/es/toUpper';
import { variant } from 'styled-system';
import { styled } from '../../styled';
import { Box } from '../Box/Box';
import { getAssetLogoBgColor, getHeight, wrapWith } from './helpers';
import { variants } from './styles';

type Props = {
    assetId: string;
    /**
     * Icon url or base64 icon
     */
    logo?: string;
    /**
     * Asset name
     */
    name: string;

    variant?: keyof typeof variants;
};

export const AssetLogo = styled(Box)<Props>(
    css({
        borderRadius: '100%',
        backgroundSize: '100% 100%',
        ':before': {
            color: 'standard.$0',
            display: 'block',
            width: '100%',
            height: '100%',
            textAlign: 'center',
        },
    }),
    ifElse(
        pipe(prop('logo'), isNil),
        applySpec({
            background: pipe(prop('assetId'), getAssetLogoBgColor),
            ':before': applySpec({
                content: pipe(prop('name'), head, toUpper, wrapWith('"', '"')),
                fontSize: pipe(
                    getHeight,
                    multiply(0.43),
                    Math.round,
                    String,
                    flip(concat)('px')
                ),
                lineHeight: pipe(getHeight, String, flip(concat)('px')),
            }),
        }),
        applySpec({
            backgroundImage: pipe(prop('logo'), wrapWith('url(', ')')),
        })
    ),
    variant({
        prop: 'variant',
        variants,
    })
);
