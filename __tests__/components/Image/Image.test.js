// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Image from '~/components/Image';

test('renders correctly', () => {
    const image = shallow(<Image src="https://react.semantic-ui.com/logo.png" />);
    expect(image).toMatchSnapshot();
});
