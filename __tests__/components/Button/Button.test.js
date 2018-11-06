// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Button from '~/components/Button';

test('renders correctly', () => {
    const button = shallow(<Button />);
    expect(button).toMatchSnapshot();
});
