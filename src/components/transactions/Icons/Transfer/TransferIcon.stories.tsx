import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from 'themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from 'components/Flex/Flex';
import { TransferIcon } from './TransferIcon';
import { TUser } from '../../../../interface';
import { address, publicKey, randomSeed } from '@waves/ts-lib-crypto';


const stories = storiesOf('Transfer Icon', module);
const seed = randomSeed();

const user: TUser = {
    address: address(seed),
    publicKey: publicKey(seed),
    networkByte: 'W'.charCodeAt(0),
    aliases: []
};

const send = {
    type: 4 as 4,
    recipient: address(randomSeed()),
};

const circular = {
    type: 4 as 4,
    recipient: user.address
};

const receive = {
    type: 4 as 4,
    recipient: user.address,
    senderPublicKey: publicKey(randomSeed())
};

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p="16">
            <Flex flexDirection="row" mr="16">
                <TransferIcon tx={send} user={user}/>
                <TransferIcon tx={send} user={user} size={40}/>
                <TransferIcon tx={send} user={user} size={40} fillColor={'primary'}/>
            </Flex>
            <Flex flexDirection="row" mr="16">
                <TransferIcon tx={receive} user={user}/>
                <TransferIcon tx={receive} user={user} size={40}/>
                <TransferIcon tx={receive} user={user} size={40} fillColor={'primary'}/>
            </Flex>
            <Flex flexDirection="row" mr="16">
                <TransferIcon tx={circular} user={user}/>
                <TransferIcon tx={circular} user={user} size={40}/>
                <TransferIcon tx={circular} user={user} size={40} fillColor={'primary'}/>
            </Flex>
        </Flex>
    </ThemeProvider>
));
