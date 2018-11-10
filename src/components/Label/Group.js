// @flow
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import _ from 'lodash';

import type { GroupProps } from '~/types/components/Label';


export default class Group extends PureComponent<GroupProps> {
    render() {
        let overridingProps = _.pickBy(this.props, (prop, key) => key !== 'children' && !!prop);

        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {React.Children.map(this.props.children, (child: Node) => {
                    return (
                        <View style={{ paddingHorizontal: 3 }}>
                            {React.cloneElement(child, overridingProps)}
                        </View>
                    );
                })}
            </View>
        );
    }
}