// @flow
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

import type { InlineProps } from '~/types/components/Segment';

class Inline extends PureComponent<InlineProps> {
    render() {
        let { children } = this.props;

        let childComp = React.Children.map(children, child => (_.isString(child)
            ? <Text>{child}</Text>
            : child
        ));

        return (
            <View style={{ flexDirection: 'row' }}>
                {childComp}
            </View>
        );
    }
}

export default Inline;