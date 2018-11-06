// @flow
import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Label from '~/components/Label';

const labelStories = storiesOf('Label', module);

labelStories.add('Standard', () => (
    <Label>
        <Text>Label</Text>
    </Label>
));

export default labelStories;
