import React from 'react';
import css from '@styled-system/css';
import {
    applySpec,
    concat,
    flip,
    head,
    ifElse,
    isNil,
    multiply,
    pipe,
    prop,
    toUpper,
} from 'ramda';
import { variant } from 'styled-system';
import { styled } from '../../styled';
import { Icon } from '../Icon/Icon';
import { Box } from '../Box/Box';
import { getAssetLogoBgColor, getHeight, wrapWith } from './helpers';
import { variants } from './styles';
import { iconWavesLogo } from '../../icons/waves-logo';
import omit from 'ramda/es/omit';

type Props = {
    assetId: string | null;
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
const NAMES = ['name', 'logo', 'assetId'];

export const AssetLogo = styled(
    ifElse(
        pipe(prop('assetId'), isNil),
        (props) => <Icon {...omit(NAMES, props)} icon={iconWavesLogo} />,
        (props) => <Box {...omit(NAMES, props)}></Box>
    )
)<Props>(
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
        pipe(prop('assetId'), isNil),
        () => null,
        ifElse(
            pipe(prop('logo'), isNil),
            applySpec({
                background: pipe(prop('assetId'), getAssetLogoBgColor),
                ':before': applySpec({
                    content: pipe(
                        prop('name'),
                        head,
                        toUpper,
                        wrapWith('"', '"')
                    ),
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
        )
    ),
    variant({
        prop: 'variant',
        variants,
    })
);
