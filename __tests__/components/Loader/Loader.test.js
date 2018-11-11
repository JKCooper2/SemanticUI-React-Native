// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Loader from '~/components/Loader';

test('renders correctly', () => {
    const loader = shallow(<Loader active />);
    expect(loader).toMatchSnapshot();
});
