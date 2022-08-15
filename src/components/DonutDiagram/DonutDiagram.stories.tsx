// import React, { useState } from 'react';
// import { storiesOf } from '@storybook/react';
// import { Box } from '../Box/Box';
// import { defaultTheme } from '../../themes/default';
// import { ThemeProvider } from 'emotion-theming';
// import { DonutDiagram } from './DonutDiagram';
//
// const stories = storiesOf('Donut Diagram', module);
//
// stories.add('simple', () => {
//     const [value, setValue] = useState(0);
//
//     setTimeout(() => {
//         setValue(0.5);
//     }, 3000);
//
//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <Box>
//                 <DonutDiagram
//                     data={[
//                         {
//                             value: 0.25,
//                             color: 'primary.$300',
//                             id: 'id1',
//                         },
//                         {
//                             value: 0.4,
//                             color: 'primary.$900',
//                             id: 'id6',
//                         },
//                     ]}
//                     baseColor="#80c726"
//                     border={12}
//                     size={112}
//                 />
//                 <DonutDiagram
//                     data={[
//                         {
//                             value,
//                             color: 'primary.$300',
//                             id: 'id2',
//                         },
//                     ]}
//                     easing={'ease-out'}
//                     animationTime={500}
//                     baseColor="danger.$300"
//                     border={40}
//                     size={112}
//                 />
//                 <DonutDiagram
//                     data={[
//                         {
//                             value: 0.5,
//                             color: 'success.$500',
//                             id: 'id3',
//                         },
//                     ]}
//                     baseColor="transparent"
//                     border={20}
//                     size={150}
//                 />
//                 <DonutDiagram
//                     data={[
//                         {
//                             value: 0.1,
//                             color: 'primary.$300',
//                             id: 'id4',
//                         },
//                     ]}
//                     baseColor="danger.$300"
//                     size={112}
//                     border={2}
//                 />
//                 <DonutDiagram
//                     data={[
//                         {
//                             value: 0.75,
//                             color: 'primary.$300',
//                             id: 'id5',
//                         },
//                     ]}
//                     baseColor="danger.$300"
//                     size={300}
//                     border="none"
//                 />
//                 <DonutDiagram
//                     data={[
//                         { value: 0.25, color: 'primary.$300', id: 'value1' },
//                         { value: 0.29, color: 'danger.$300', id: 'value2' },
//                         { value: 0.2, color: 'green.$500', id: 'value3' },
//                         { value: 0.15, color: 'success.$300', id: 'value4' },
//                         { value: 0.1, color: 'warning.$500', id: 'value5' },
//                     ]}
//                     baseColor="main.$100"
//                     size={300}
//                     border="none"
//                 />
//                 <DonutDiagram
//                     data={[
//                         {
//                             value: 0.25,
//                             color: 'primary.$300',
//                             id: 'id1',
//                         },
//                         {
//                             value: 0.4,
//                             color: 'primary.$900',
//                             id: 'id6',
//                         },
//                     ]}
//                     baseColor="#80c726"
//                     border={12}
//                     size={112}
//                     gaps={{ color: '#fff', value: 0.05 }}
//                 />
//                 <DonutDiagram
//                     data={[
//                         {
//                             value: 0.25,
//                             color: 'primary.$300',
//                             id: 'id1',
//                         },
//                         {
//                             value: 0.4,
//                             color: 'primary.$900',
//                             id: 'id6',
//                         },
//                         {
//                             value: 0.35,
//                             color: 'main.$300',
//                             id: 'id6.1',
//                         },
//                     ]}
//                     baseColor="#80c726"
//                     border={12}
//                     size={112}
//                     gaps={{ color: '#fff' }}
//                 />
//             </Box>
//         </ThemeProvider>
//     );
// });
