import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './Icon';
import { iconCheck } from '../../assets/icons/check';

const stories = storiesOf('Icon', module);

stories.add('simple', () => (
    <Icon
        icon={iconCheck}
        width={50}
        height={50}
        sx={{ ':hover': { color: 'red' } }}
    />
));
