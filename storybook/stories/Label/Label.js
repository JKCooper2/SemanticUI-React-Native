// @flow
import React, { Fragment } from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Label from '~/components/Label';
import Icon from '~/components/Icon';

const labelStories = storiesOf('Label', module);

labelStories.add('Standard', () => (
    <Fragment>
        <Label>
            <Text>Label</Text>
        </Label>
        <Label>Inline Label</Label>
        <Label>
            <Icon name="rocket" />
            Label With Icon
        </Label>
        <Label>
            <Text style={{ color: 'red' }}>Label With Styling</Text>
        </Label>
        <Label color="blue">Blue Label</Label>
        <Label color="teal">Teal Label</Label>
        <Label color="yellow">Yellow Label</Label>
        <Label color="blue">
            Label
            <Label.Detail> With Detail</Label.Detail>
        </Label>
        <Label basic>
            Basic Label
        </Label>
        <Label color="red" basic>
            Basic Colored Label
        </Label>
        <Label color="red" basic icon="rocket">
            Basic Colored Label w/ Icon
        </Label>
        <Label color="purple" circular>
            2
        </Label>
    </Fragment>
));

labelStories.add('Group', () => (
    <Fragment>
        <Label.Group size="tiny">
            <Label>
                Fun
                <Icon name="times" />
            </Label>
            <Label>
                Happy
                <Label.Detail>22</Label.Detail>
            </Label>
            <Label>Smart</Label>
            <Label>Insane</Label>
        </Label.Group>
        <Label.Group color="blue">
            <Label>
                Fun
                <Icon name="times" />
            </Label>
            <Label>
                Happy
                <Label.Detail>22</Label.Detail>
            </Label>
            <Label>Smart</Label>
            <Label>Insane</Label>
        </Label.Group>
        <Label.Group color="blue" basic>
            <Label>
                Fun
                <Icon name="times" />
            </Label>
            <Label>
                Happy
                <Label.Detail>22</Label.Detail>
            </Label>
            <Label>Smart</Label>
            <Label>Insane</Label>
        </Label.Group>
        <Label.Group circular>
            <Label>1</Label>
            <Label>2</Label>
            <Label>3</Label>
            <Label>4</Label>
            <Label>5</Label>
            <Label>6</Label>
            <Label>7</Label>
            <Label>8</Label>
        </Label.Group>
    </Fragment>
));

labelStories.add('Sizes', () => (
    <Fragment>
        <Label size="mini">Mini</Label>
        <Label size="tiny">Tiny</Label>
        <Label size="small">Small</Label>
        <Label size="medium">Medium</Label>
        <Label size="large">Large</Label>
        <Label size="big">Big</Label>
        <Label size="huge">Huge</Label>
        <Label size="massive">Massive</Label>
    </Fragment>
));

export default labelStories;
