// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Header from '~/components/Header';

test('renders correctly', () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
});
