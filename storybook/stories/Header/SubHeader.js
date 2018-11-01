// @flow
import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react-native';

import Header from '~/components/Header';

const subheaderStories = storiesOf('SubHeader', module);

subheaderStories.add('Basic', () => <Header.SubHeader>Basic SubHeader</Header.SubHeader>);

subheaderStories.add('As', () => (
    <Fragment>
        <Header.SubHeader as="h1">SubHeader H1</Header.SubHeader>
        <Header.SubHeader as="h2">SubHeader H2</Header.SubHeader>
        <Header.SubHeader as="h3">SubHeader H3</Header.SubHeader>
        <Header.SubHeader as="h4">SubHeader H4</Header.SubHeader>
        <Header.SubHeader as="h5">SubHeader H5</Header.SubHeader>
        <Header.SubHeader as="h6">SubHeader H6</Header.SubHeader>
    </Fragment>
));

export default subheaderStories;
