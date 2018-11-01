// @flow
import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Icon from '~/components/Icon';

const iconStories = storiesOf('Icon', module);

iconStories.add('Standard', () => <Icon name="rocket" />);

iconStories.add('Type', () => (
    <Fragment>
        <Icon type="antDesign" name="meh" />
        <Icon type="entypo" name="emoji-flirt" />
        <Icon type="evilIcons" name="like" />
        <Icon type="feather" name="database" />
        <Icon type="fontAwesome" name="eye" />
        <Icon type="fontAwesome5" name="rocket" />
        <Icon type="foundation" name="lightbulb" />
        <Icon type="ionicons" name="ios-bicycle" />
        <Icon type="materialCommunityIcons" name="account-check" />
        <Icon type="materialIcons" name="airport-shuttle" />
        <Icon type="octicons" name="beaker" />
        <Icon type="simpleLineIcons" name="user-following" />
        <Icon type="zocial" name="github" />
    </Fragment>
));

iconStories.add('Color', () => <Icon name="rocket" color="red" />);

iconStories.add('Size', () => (
    <Fragment>
        <Icon name="rocket" size="mini" />
        <Icon name="rocket" size="tiny" />
        <Icon name="rocket" size="small" />
        <Icon name="rocket" size="medium" />
        <Icon name="rocket" size="large" />
        <Icon name="rocket" size="big" />
        <Icon name="rocket" size="huge" />
        <Icon name="rocket" size="massive" />
    </Fragment>
));

iconStories.add('Flipped', () => (
    <Fragment>
        <Icon name="rocket" />
        <Icon name="rocket" flipped="horizontal" />
        <Icon name="rocket" flipped="vertical" />
    </Fragment>
));

iconStories.add('Fitted', () => (
    <Fragment>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text>IC</Text>
            <Icon name="rocket" />
            <Text>ON</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text>IC</Text>
            <Icon name="rocket" fitted />
            <Text>ON</Text>
        </View>
    </Fragment>
));

iconStories.add('Loading', () => <Icon name="rocket" loading />);

iconStories.add('Disabled', () => <Icon name="rocket" disabled />);

iconStories.add('Circular', () => (
    <Fragment>
        <Icon name="rocket" circular />
        <Icon name="rocket" circular inverted />
        <Icon name="rocket" circular color="teal" />
        <Icon name="rocket" circular color="teal" inverted />
    </Fragment>
));

iconStories.add('Bordered', () => (
    <Fragment>
        <Icon name="rocket" bordered />
        <Icon name="rocket" bordered inverted />
        <Icon name="rocket" bordered color="teal" />
        <Icon name="rocket" bordered color="teal" inverted />
    </Fragment>
));

iconStories.add('Group', () => (
    <Icon.Group size="huge">
        <Icon size="big" name="circle" color="red" />
        <Icon name="user" />
    </Icon.Group>
));

export default iconStories;
