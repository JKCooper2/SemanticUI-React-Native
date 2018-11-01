// @flow
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react-native';

import Flag from '~/components/Flag';

const flagStories = storiesOf('Flag', module);

flagStories.add('Standard', () => <Flag name="au" />);

flagStories.add('Sizes', () => (
    <Fragment>
        <Flag name="au" size="tiny" />
        <Flag name="au" size="small" />
        <Flag name="au" size="medium" />
        <Flag name="au" size="large" />
        <Flag name="au" size="big" />
    </Fragment>
));

flagStories.add('Shiny', () => (
    <Fragment>
        <Flag name="au" />
        <Flag name="au" shiny />
    </Fragment>
));

export default flagStories;
