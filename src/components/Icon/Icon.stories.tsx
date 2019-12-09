import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './Icon';
import { Box } from '../Box/Box';
import { iconCheck } from '../../assets/icons/check';

const stories = storiesOf('Icon', module);

stories.add('simple', () => (
    <Box color="blue" sx={{ ':hover': { color: 'red' }}}>
        <Icon icon={iconCheck} width={50} height={50}  />
    </Box>
));