import React from 'react';
import { Flex } from '../Flex/Flex';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf } from '@storybook/react';
import { ControlBox } from '../ControlBox/ControlBox';
import { Checkbox } from './Checkbox';
import { defaultControlBoxStyles } from './styles';
import { mergeDeepRight } from 'ramda';
import { Icon } from '../Icon/Icon';
import { iconCheck } from '../../icons/check';

// TODO нужны тесты на чек иконки, на корректную работу label for + чекбокс

const stories = storiesOf('Checkbox', module);

stories.add('simple', () => {
    const cbStyles = {
        baseStyles: {
            marginRight: '16px',
        },
    };

    const customControlBoxStyles = mergeDeepRight(defaultControlBoxStyles, {
        baseStyles: {
            marginRight: '16px',
            borderColor: 'red',
            width: '20px',
            height: '20px',
        },
    });

    return (
        <ThemeProvider theme={defaultTheme}>
            <Flex
                p={16}
                bg="main.$800"
                flexDirection="column"
                justifyContent="center"
                color="white"
            >
                <Checkbox defaultChecked={false} controlBoxStyles={cbStyles}>
                    default unchecked
                </Checkbox>
                <Checkbox
                    defaultChecked={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    default checked
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    isDisabled={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    disabled unchecked
                </Checkbox>
                <Checkbox
                    defaultChecked={true}
                    isDisabled={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    disabled checked
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    pt={10}
                    controlBoxStyles={cbStyles}
                    controlBox={(): React.ReactNode => (
                        <ControlBox
                            sx={customControlBoxStyles.baseStyles}
                            _focus={customControlBoxStyles._focus}
                            _hover={customControlBoxStyles._hover}
                            _invalid={customControlBoxStyles._disabled}
                            _disabled={customControlBoxStyles._disabled}
                            _checked={customControlBoxStyles._checked}
                            _child={customControlBoxStyles._child}
                            _checkedAndChild={
                                customControlBoxStyles._checkedAndChild
                            }
                            _checkedAndDisabled={
                                customControlBoxStyles._checkedAndDisabled
                            }
                            _checkedAndDisabledHover={
                                customControlBoxStyles._checkedAndDisabledHover
                            }
                            _checkedAndFocus={
                                customControlBoxStyles._checkedAndFocus
                            }
                            _checkedAndHover={
                                customControlBoxStyles._checkedAndHover
                            }
                        >
                            <Icon icon={iconCheck} />
                        </ControlBox>
                    )}
                >
                    custom
                </Checkbox>
                <Checkbox
                    isReadOnly={false}
                    defaultChecked={true}
                    isChecked={false}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    disabled checked
                </Checkbox>
            </Flex>
        </ThemeProvider>
    );
});
