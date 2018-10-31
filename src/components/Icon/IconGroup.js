// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import { View, StyleSheet } from 'react-native';

import _ from 'lodash';

import type { IconGroupPropsType } from '~/types/components/Icon';

let SIZES = {
    mini: 8,
    tiny: 12,
    small: 18,
    medium: 24,
    large: 32,
    big: 48,
    huge: 72,
    massive: 96
};

class IconGroup extends PureComponent<IconGroupPropsType> {
    static defaultProps = {
        size: 'medium',
    };

    render() {
        const { size, children } = this.props;

        let viewSize: number = _.get(SIZES, size, SIZES.medium);

        return (
            <View style={{ width: viewSize, height: viewSize }}>
                {React.Children.map(children, (child: Node) => (
                    <View style={[StyleSheet.absoluteFill, { justifyContent: 'center', alignItems: 'center' }]}>
                        {child}
                    </View>
                ))}
            </View>
        );
    }
}


export default IconGroup;