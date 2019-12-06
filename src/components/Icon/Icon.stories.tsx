import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from './Icon';
import { Box } from '../Box/Box';

const stories = storiesOf('Icon', module);

stories.add('simple', () => (
    <Box color="blue" sx={{ ':hover': { color: 'red' }}}>
        <Icon name="check" width={50} height={50}  />
    </Box>
));