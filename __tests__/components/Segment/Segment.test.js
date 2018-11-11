// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Segment from '~/components/Segment';

test('renders correctly', () => {
    const segment = shallow(<Segment>Segment</Segment>);
    expect(segment).toMatchSnapshot();
});
