// @flow
import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react-native';

import Button from '~/components/Button';
import Icon from '~/components/Icon';

const buttonStories = storiesOf('Button', module);

buttonStories.add('Standard', () => (
    <Button>
        Button
    </Button>
));

buttonStories.add('Primary', () => (
    <Button primary>
        Primary
    </Button>
));


buttonStories.add('Secondary', () => (
    <Button secondary>
        Secondary
    </Button>
));

buttonStories.add('Colors', () => (
    <Fragment>
        <Button color="red" content="Red" />
        <Button color="orange" content="Orange" />
        <Button color="yellow" content="Yellow" />
        <Button color="olive" content="Olive" />
        <Button color="green" content="Green" />
        <Button color="teal" content="Teal" />
        <Button color="blue" content="Blue" />
        <Button color="violet" content="Violet" />
        <Button color="purple" content="Purple" />
        <Button color="pink" content="Pink" />
        <Button color="brown" content="Brown" />
        <Button color="grey" content="Grey" />
        <Button color="black" content="Black" />
    </Fragment>
));

buttonStories.add('Compact', () => (
    <Fragment>
        <Button compact content="Compact" />
        <Button content="Standard" />
    </Fragment>
));

buttonStories.add('Positive/Negative', () => (
    <Fragment>
        <Button positive content="Positive" />
        <Button negative content="Negative" />
    </Fragment>
));

buttonStories.add('Fluid', () => (
    <Button fluid content="Fluid" />
));


buttonStories.add('Circular', () => (
    <Button circular content="C" />
));

buttonStories.add('Icon', () => (
    <Fragment>
        <Button icon>
            <Icon name="rocket" />
        </Button>
        <Button icon="rocket" />
    </Fragment>
));

export default buttonStories;