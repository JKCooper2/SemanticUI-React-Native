// @flow
import React from 'react';
import { shallow } from 'enzyme';

import Icon from '~/components/Icon';

test('renders correctly', () => {
    const iconGroup = shallow(
        <Icon.Group>
            <Icon name="rocket" />
        </Icon.Group>
    );
    expect(iconGroup).toMatchSnapshot();
});
