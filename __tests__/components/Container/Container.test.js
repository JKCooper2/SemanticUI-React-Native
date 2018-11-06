// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Container from '~/components/Container';

test('renders correctly', () => {
    const container = shallow(<Container />);
    expect(container).toMatchSnapshot();
});
