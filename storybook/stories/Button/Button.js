/* eslint-disable no-console */
// @flow
import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, boolean, object, select } from '@storybook/addon-ondevice-knobs';

import Button from '~/components/Button';
import Icon from '~/components/Icon';

import { colors } from '../../helpers';

const buttonStories = storiesOf('Button', module);
buttonStories.addDecorator(withKnobs);

buttonStories.add('Full', () => (
    <Button
        content={text('Content', '')}
        onPress={() => console.log('Button Pressed')}
        style={object('Styles', {})}
        primary={boolean('Primary', false)}
        secondary={boolean('Secondary', false)}
        compact={boolean('Compact', false)}
        toggle={boolean('Toggle', false)}
        active={boolean('Active', false)}
        positive={boolean('Positive', false)}
        negative={boolean('Negative', false)}
        fluid={boolean('Fluid', false)}
        circular={boolean('Circular', false)}
        icon={text('Icon', '') || false}
        color={select('Color', colors, 'Blue')}
    >
        {text('Text', 'Button')}
    </Button>
));

buttonStories.add('Standard', () => <Button>{text('Text', 'Button')}</Button>);

buttonStories.add('Primary', () => <Button primary={boolean('Primary', true)}>Primary</Button>);

buttonStories.add('Secondary', () => <Button secondary={boolean('Secondary', true)}>Secondary</Button>);

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

buttonStories.add('Fluid', () => <Button fluid content="Fluid" />);

buttonStories.add('Circular', () => <Button circular content="C" />);

buttonStories.add('Icon', () => (
    <Fragment>
        <Button icon>
            <Icon name="rocket" />
        </Button>
        <Button icon="rocket" />
    </Fragment>
));

export default buttonStories;
