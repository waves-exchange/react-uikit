// import { storiesOf } from '@storybook/react';
// import { ThemeProvider } from 'emotion-theming';
// import React, { FC } from 'react';
// import { defaultTheme } from '../../themes/default';
// import { Box } from '../Box/Box';
// import { Button } from '../Button/Button';
// import { Text } from '../Text/Text';
// import { RadioButtonGroup, RadioButtonProps } from './RadioButtonGroup';
//
// const stories = storiesOf('RadioButtonGroup', module);
//
// const RadioButton: FC<RadioButtonProps> = ({
//     checked,
//     children,
//     value,
//     ...rest
// }) => (
//     <Button
//         aria-checked={checked}
//         variant={checked ? 'primary' : 'transparent'}
//         variantSize="medium"
//         {...rest}
//     >
//         {children}
//     </Button>
// );
//
// stories.add('simple', () => (
//     <ThemeProvider theme={defaultTheme}>
//         <Box mb="16px">
//             <Text>custom radio</Text>
//             <RadioButtonGroup name="radio3" value="2">
//                 <RadioButton value="1" mb="8px">
//                     Radio 1
//                 </RadioButton>
//                 <RadioButton value="2">Radio 2</RadioButton>
//             </RadioButtonGroup>
//         </Box>
//
//         <Box mb="16px">
//             <Text>custom radio (column)</Text>
//             <RadioButtonGroup name="radio3" value="2" direction="column">
//                 <RadioButton value="1" mb="8px">
//                     Radio 1
//                 </RadioButton>
//                 <RadioButton value="2">Radio 2</RadioButton>
//             </RadioButtonGroup>
//         </Box>
//     </ThemeProvider>
// ));
