// @flow
import React, { Fragment } from 'react';
import { Text, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Divider from '~/components/Divider';

const dividerStories = storiesOf('Divider', module);

dividerStories.add('Standard', () => (
    <Fragment>
        <Text>Header Above</Text>
        <Divider />
        <Text>Header Below</Text>
    </Fragment>
));

dividerStories.add('String Child', () => <Divider>Test</Divider>);

dividerStories.add('Content', () => <Divider content="Test" />);

dividerStories.add('React Child', () => (
    <Divider>
        <Text>Test</Text>
    </Divider>
));

dividerStories.add('Fitted', () => (
    <Fragment>
        <Text>Header Above</Text>
        <Divider fitted />
        <Text>Header Below</Text>
    </Fragment>
));

dividerStories.add('Section', () => (
    <Fragment>
        <Text>Header Above</Text>
        <Divider section />
        <Text>Header Below</Text>
    </Fragment>
));

dividerStories.add('Clearing', () => (
    <Fragment>
        <Text>Header Above</Text>
        <Divider clearing />
        <Text>Header Below</Text>
    </Fragment>
));

dividerStories.add('Hidden', () => (
    <Fragment>
        <Text>Header Above</Text>
        <Divider hidden />
        <Text>Header Below</Text>
    </Fragment>
));

dividerStories.add('Inverted', () => (
    <View style={{ backgroundColor: 'black' }}>
        <Text>Header Above</Text>
        <Divider inverted>Inverted</Divider>
        <Text>Header Below</Text>
    </View>
));

export default dividerStories;
