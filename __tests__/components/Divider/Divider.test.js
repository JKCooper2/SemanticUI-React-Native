// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Divider from '~/components/Divider';

test('renders correctly', () => {
    const divider = shallow(<Divider />);
    expect(divider).toMatchSnapshot();
});
