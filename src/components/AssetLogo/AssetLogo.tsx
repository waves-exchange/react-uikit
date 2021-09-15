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
    omit,
    toUpper,
    map,
    is,
} from 'ramda';
import { variant } from 'styled-system';
import { styled } from '../../styled';
import { Icon } from '../Icon/Icon';
import { Box } from '../Box/Box';
import {
    getAssetLogoBgColor,
    getHeight,
    wrapWith,
    getPrettyName,
} from './helpers';
import { variants } from './styles';
import { iconWavesLogo } from '../../icons/waves-logo';

export type AssetLogoProps = {
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

const getFontHeight = pipe(
    multiply(0.43),
    Math.round,
    String,
    flip(concat)('px')
);

const getLineHeight = pipe(String, flip(concat)('px'));

export const AssetLogo = styled(
    ifElse(
        pipe(prop('assetId'), isNil),
        (props) => <Icon {...omit(NAMES, props)} icon={iconWavesLogo} />,
        (props) => <Box {...omit(NAMES, props)}></Box>
    )
)<AssetLogoProps>(
    (data) =>
        css({
            borderRadius: '100%',
            backgroundSize: '100% 100%',
            ':before': {
                color: 'standard.$0',
                display: 'block',
                width: '100%',
                height: '100%',
                textAlign: 'center',
                fontSize: pipe(
                    getHeight,
                    ifElse(is(Object), pipe(map(getFontHeight)), getFontHeight)
                )(data),
                lineHeight: pipe(
                    getHeight,
                    ifElse(is(Object), map(getLineHeight), getLineHeight)
                )(data),
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
                        getPrettyName,
                        head,
                        toUpper,
                        wrapWith('"', '"')
                    ),
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
