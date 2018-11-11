// @flow
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import _ from 'lodash';

import type { GroupProps } from '~/types/components/Label';
import type { Element } from 'react';

export default class Group extends PureComponent<GroupProps> {
    render() {
        // $FlowFixMe
        let overridingProps: Object = _.pickBy(this.props, (prop, key) => key !== 'children' && !!prop);

        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {React.Children.map(this.props.children, (child: Element<*>) => (
                    <View style={{ paddingHorizontal: 3 }}>
                        {React.cloneElement(child, overridingProps)}
                    </View>
                ))}
            </View>
        );
    }
}