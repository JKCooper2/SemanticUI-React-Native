// @flow
import React, { PureComponent } from 'react';
import { View } from 'react-native';

import { spacing, colors } from '~/styles';

import type { Node } from 'react';

type LabelProps = {
    children?: Node
}

class Label extends PureComponent<LabelProps> {
    static defaultProps = {
        children: null
    };

    render() {
        const { children } = this.props;

        return (
            <View style={{ backgroundColor: colors.colors.lightGrey, borderRadius: spacing.border.medium }}>
                {children}
            </View>
        );
    }
}

export default Label;
