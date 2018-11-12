// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Input from '~/components/Input';

test('renders correctly', () => {
    const input = shallow(<Input placeholder="Search.." />);
    expect(input).toMatchSnapshot();
});
