// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { defaultTheme } from '../../themes/default';
// import { ThemeProvider } from 'emotion-theming';
// import { Flex } from '../Flex/Flex';
// import { IconTransfer } from './IconTransfer';
// import { TUser } from '../../interface';
// import { address, publicKey, randomSeed } from '@waves/ts-lib-crypto';
//
// const stories = storiesOf('Transfer dwcon', module);
// const seed = randomSeed();
//
// const user: TUser = {
//     address: address(seed),
//     publicKey: publicKey(seed),
//     networkByte: 'W'.charCodeAt(0),
//     aliases: [],
// };
//
// const send = {
//     type: 4 as 4,
//     recipient: address(randomSeed()),
// };
//
// const circular = {
//     type: 4 as 4,
//     recipient: user.address,
// };
//
// const receive = {
//     type: 4 as 4,
//     recipient: user.address,
//     senderPublicKey: publicKey(randomSeed()),
// };
//
// stories.add('simple', () => (
//     <ThemeProvider theme={defaultTheme}>
//         <Flex flexDirection="row" mr="16">
//             <IconTransfer tx={send} user={user} size={30} />
//             <IconTransfer tx={receive} user={user} size={30} />
//             <IconTransfer tx={circular} user={user} size={30} />
//         </Flex>
//     </ThemeProvider>
// ));
