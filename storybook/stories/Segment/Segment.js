// @flow
import React from 'react';
import { View, ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Segment from '~/components/Segment';

const stories = storiesOf('Segment', module);

stories.add('Standard', () => (
    <ScrollView style={{ padding: 10, backgroundColor: 'white' }}>
        <Segment>Here is a segment</Segment>
        <Segment basic>Here is a basic segment</Segment>
        <Segment padded>Here is a padded segment</Segment>
        <Segment padded="very">Here is a very padded segment</Segment>
        <Segment compact>Here is a compact segment</Segment>
        <Segment placeholder>Here is a placeholder segment</Segment>
        <Segment placeholder>
            Here is an inline segment
            <Segment.Inline>
                <Button primary>Clear Query</Button>
                <Button>Add Document</Button>
            </Segment.Inline>
        </Segment>
        <Segment color="red">Here is a colored segment</Segment>
        <Segment color="blue" inverted>Here is an inverted colored segment</Segment>
        <Segment secondary>Here is a secondary segment</Segment>
        <Segment tertiary>Here is a tertiary segment</Segment>
        <Segment inverted>Here is an inverted segment</Segment>
        <Segment inverted secondary>Here is an inverted secondary segment</Segment>
        <Segment inverted tertiary>Here is an inverted tertiary segment</Segment>
        <View style={{ flexDirection: 'row' }}>
            <Segment circular style={{ width: 175, height: 175 }}>
                <Header as="h4">
                    Sale!
                    <Header.SubHeader as="h6">$10.99</Header.SubHeader>
                </Header>
            </Segment>
            <Segment circular inverted style={{ width: 175, height: 175 }}>
                <Header as="h4" inverted>
                    Buy Now
                    <Header.SubHeader as="h6">$10.99</Header.SubHeader>
                </Header>
            </Segment>
        </View>
    </ScrollView>
));

export default stories;
