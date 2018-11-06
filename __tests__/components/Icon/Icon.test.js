// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Icon from '~/components/Icon';

test('renders correctly', () => {
    const icon = shallow(<Icon name="rocket" />);
    expect(icon).toMatchSnapshot();
});
