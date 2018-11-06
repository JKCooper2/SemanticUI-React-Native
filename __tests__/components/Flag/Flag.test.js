// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Flag from '~/components/Flag';

test('renders correctly', () => {
    const flag = shallow(<Flag />);
    expect(flag).toMatchSnapshot();
});
