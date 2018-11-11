// @flow
import React, { Fragment } from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Loader from '~/components/Loader';

const stories = storiesOf('Loader', module);

stories.add('Standard', () => (
    <Fragment>
        <Loader active />
        <View style={{ backgroundColor: 'black' }}>
            <Loader active inverted />
            <Loader active inverted>
                Loading
            </Loader>
            <Loader active inverted content="Loading Content"/>
        </View>
    </Fragment>
));

export default stories;
