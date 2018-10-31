// @flow
import React, { Fragment } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Image from '~/components/Image';

const imageStories = storiesOf('Image', module);

imageStories.add('Standard', () => (
    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="small"/>
));

imageStories.add('Sizes', () => (
    <ScrollView>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="mini" />
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="tiny" />
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="small" />
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="medium" />
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="large" />
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="big" />
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="huge" />
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" size="massive" />
    </ScrollView>
));

export default imageStories;
