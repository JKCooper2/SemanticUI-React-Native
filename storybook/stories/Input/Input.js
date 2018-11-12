// @flow
import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import Icon from '~/components/Icon';
import Input from '~/components/Input';

const stories = storiesOf('Input', module);

stories.add('Standard', () => (
    <ScrollView style={{ padding: 10, backgroundColor: 'white' }}>
        <Input placeholder="Search.." />
        <Input placeholder="Search.." error />
        <Input placeholder="Search.." transparent />
        <Input placeholder="Search.." fluid />
        <Input placeholder="Search.." loading />
        <Input placeholder="Search.." loading iconPosition="left" />
        <Input placeholder="Search.." icon="rocket" />
        <Input placeholder="Search.." icon={<Icon name="rocket" />} />
        <Input placeholder="Search.." label="http://" />
        <Input placeholder="Search.." label=".com" labelPosition="right" />
    </ScrollView>
));

export default stories;
