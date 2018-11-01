// @flow
import React, { Fragment } from 'react';
import { View, ScrollView } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Header from '~/components/Header';

const headerStories = storiesOf('Header', module);

headerStories.add('As', () => (
    <Fragment>
        <Header as="h1">Header H1</Header>
        <Header as="h2">Header H2</Header>
        <Header as="h3">Header H3</Header>
        <Header as="h4">Header H4</Header>
        <Header as="h5">Header H5</Header>
        <Header as="h6">Header H6</Header>
    </Fragment>
));

headerStories.add('Size', () => (
    <Fragment>
        <Header size="huge">Header Huge</Header>
        <Header size="large">Header Large</Header>
        <Header size="medium">Header Medium</Header>
        <Header size="small">Header Small</Header>
        <Header size="tiny">Header Tiny</Header>
    </Fragment>
));

headerStories.add('Sub', () => (
    <Header sub>SubHeader</Header>
));

headerStories.add('Content & Subheader', () => (
    <Header content="Header" subheader="Subheader" />
));

headerStories.add('Disabled', () => (
    <Header disabled>Header</Header>
));

headerStories.add('Text Align', () => (
    <View style={{ flex: 1 }}>
        <Header textAlign="left">Align Left</Header>
        <Header textAlign="center">Align Center</Header>
        <Header textAlign="right">Align Right</Header>
    </View>
));

headerStories.add('Color', () => (
    <ScrollView>
        <Header as='h4' color='red'>Red</Header>
        <Header as='h4' color='orange'>Orange</Header>
        <Header as='h4' color='yellow'>Yellow</Header>
        <Header as='h4' color='olive'>Olive</Header>
        <Header as='h4' color='green'>Green</Header>
        <Header as='h4' color='teal'>Teal</Header>
        <Header as='h4' color='blue'>Blue</Header>
        <Header as='h4' color='purple'>Purple</Header>
        <Header as='h4' color='violet'>Violet</Header>
        <Header as='h4' color='pink'>Pink</Header>
        <Header as='h4' color='brown'>Brown</Header>
        <Header as='h4' color='grey'>Grey</Header>
    </ScrollView>
));

headerStories.add('Inverted', () => (
    <ScrollView style={{ backgroundColor: 'black' }}>
        <Header as='h4' color='red' inverted>Red</Header>
        <Header as='h4' color='orange' inverted>Orange</Header>
        <Header as='h4' color='yellow' inverted>Yellow</Header>
        <Header as='h4' color='olive' inverted>Olive</Header>
        <Header as='h4' color='green' inverted>Green</Header>
        <Header as='h4' color='teal' inverted>Teal</Header>
        <Header as='h4' color='blue' inverted>Blue</Header>
        <Header as='h4' color='purple' inverted>Purple</Header>
        <Header as='h4' color='violet' inverted>Violet</Header>
        <Header as='h4' color='pink' inverted>Pink</Header>
        <Header as='h4' color='brown' inverted>Brown</Header>
        <Header as='h4' color='grey' inverted>Grey</Header>
    </ScrollView>
));

export default headerStories;