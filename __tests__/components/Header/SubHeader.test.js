// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Header from '~/components/Header';

test('renders correctly', () => {
    const subheader = shallow(<Header.SubHeader>SubHeader</Header.SubHeader>);
    expect(subheader).toMatchSnapshot();
});
