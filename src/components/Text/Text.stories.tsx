import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from './Text';

const stories = storiesOf('Text', module);

stories.add('simple', () => <Text>Text</Text>);
