// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { defaultTheme } from '../..';
// import { ThemeProvider } from 'emotion-theming';
// import { AddressLabel } from './AddressLabel';
// import { Box } from '../..';
// import { AddressAvatar } from './AddressAvatar';
// import { keyframes } from '@emotion/core';
// import { BoxWithIcon } from '../BoxWithIcon/BoxWithIcon';
// import { iconSmartMini } from '../../icons/smartMini';
//
// export const animatedGradient = keyframes`
//     0% {
//         background-position: 0% 50%;
//     }
//
//     50% {
//         background-position: 100% 50%;
//     }
//
//     100% {
//         background-position: 0% 50%;
//     }
// `;
//
// const stories = storiesOf('LabeledAddressAvatar', module);
//
// stories.add('simple', () => (
//     <ThemeProvider theme={defaultTheme}>
//         <Box backgroundColor="main.$800" maxWidth="360px">
//             <BoxWithIcon
//                 p="8px 16px"
//                 icon={iconSmartMini}
//                 iconLabel="Smart Asset"
//                 zIndex={10}
//             >
//                 <AddressAvatar address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7" />
//             </BoxWithIcon>
//             <AddressLabel
//                 p="8px 16px"
//                 name="Coco Jumbo"
//                 withCopy={true}
//                 address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
//             >
//                 <AddressAvatar
//                     address="3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7"
//                     variantSize="large"
//                     sx={{
//                         position: 'relative',
//                         zIndex: 1,
//                         ':before': {
//                             content: '""',
//                             borderRadius: 'circle',
//                             position: 'absolute',
//                             left: -2,
//                             top: -2,
//                             backgroundImage:
//                                 'linear-gradient(60deg, #E14B51, #BC5A7B, #9968A3, #7C74C4, #7577CC, #5A81EA)',
//                             backgroundSize: '400%',
//                             width: 'calc(100% + 4px)',
//                             height: 'calc(100% + 4px)',
//                             zIndex: -1,
//                             animation: `${animatedGradient} 3s linear infinite`,
//                         },
//                     }}
//                 />
//             </AddressLabel>
//         </Box>
//     </ThemeProvider>
// ));
