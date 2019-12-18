import { Box } from '../..';
import isNil from 'ramda/es/isNil';
import ifElse from 'ramda/es/ifElse';
import prop from 'ramda/es/prop';
import pipe from 'ramda/es/pipe';
import applySpec from 'ramda/es/applySpec';
import toUpper from 'ramda/es/toUpper';
import multiply from 'ramda/es/multiply';
import head from 'ramda/es/head';
import flip from 'ramda/es/flip';
import concat from 'ramda/es/concat';
import { variants } from './styles';
import { getAssetLogoColor, wrapToQuote, getHeight } from './helpers';
import { variant } from 'styled-system';
import css from '@styled-system/css';
import { styled } from '../../styled';
import always from 'ramda/es/always';

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

    variant?: keyof typeof variants;
};

export const AssetLogo = styled(Box)<Props>(
    css({
        borderRadius: '100%',
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
            background: pipe(prop('assetId'), getAssetLogoColor),
            ':before': applySpec({
                content: pipe(prop('name'), head, toUpper, wrapToQuote),
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
            backgroundImage: pipe(
                prop('logo'),
                concat('url('),
                flip(concat)(')')
            ),
            backgroundSize: always('100% 100%'),
        })
    ),
    variant({
        prop: 'variant',
        variants,
    })
);
