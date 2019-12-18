import React from 'react';
import { storiesOf } from '@storybook/react';
import { Copy } from './Copy';

const stories = storiesOf('Copy', module);

stories.add('Copy', () => {
    return <Copy />;
});
