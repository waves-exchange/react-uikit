import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './Icon';
import { iconCheck } from '../../assets/icons/check';
import { iconClose } from '../../assets/icons/close';
import { iconQuestion } from '../../assets/icons/question';
import { iconLogo } from '../../assets/icons/logo';
import { Flex } from '../Flex/Flex';

const stories = storiesOf('Icon', module);

stories.add('simple', () => {
    const commonProps = {
        iconSize: 'large' as 'large',
        sx: { ':hover': { color: 'red' } },
    };

    return (
        <Flex sx={{ '& > * + *': { ml: 16 } }}>
            <Icon {...commonProps} icon={iconCheck} />
            <Icon {...commonProps} icon={iconClose} />
            <Icon {...commonProps} icon={iconQuestion} />
            <Icon {...commonProps} icon={iconLogo} />
        </Flex>
    );
});
