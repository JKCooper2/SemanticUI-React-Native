// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';

import { spacing, fonts, colors } from '~/styles';

type Props = {
    children?: Node,
    style?: StyleObj,
    fitted?: boolean,
    hidden?: boolean,
    section?: boolean,
    clearing?: boolean,
    inverted?: boolean,
    content?: Node
};

const getHeight = (fitted: boolean, section: boolean, clearing: boolean): StyleObj => {
    if (fitted) {
        return { viewHeight: spacing.padding.tiny, barHeight: spacing.padding.tiny / 2 };
    }

    if (section) {
        return { viewHeight: spacing.padding.large, barHeight: spacing.padding.large / 2 };
    }

    if (clearing) {
        return { viewHeight: spacing.padding.large, barHeight: 0 };
    }

    return { viewHeight: spacing.padding.medium, barHeight: spacing.padding.medium / 2 };
};

const getBarColor = (hidden, inverted) => {
    if (hidden) {
        return colors.colors.transparent;
    }

    if (inverted) {
        return colors.colors.white;
    }

    return colors.colors.lightGrey;
};

class Divider extends PureComponent<Props> {
    static defaultProps = {
        style: {},
        fitted: false,
        hidden: false,
        section: false,
        clearing: false,
        inverted: false,
        children: null,
        content: null
    };

    render() {
        const { children, fitted, hidden, section, clearing, inverted, content } = this.props;

        let { viewHeight, barHeight } = getHeight(fitted, section, clearing);
        let barColor = getBarColor(hidden, inverted);

        let usedChildren = content || children;

        let newChildren = _.isString(usedChildren) ? (
            <Text style={{ paddingHorizontal: spacing.padding.medium, fontSize: fonts.size.default, fontWeight: 'bold', color: barColor }}>{children}</Text>
        ) : children;

        return newChildren ? (
            <View style={{ height: viewHeight, alignItems: 'center', flexDirection: 'row' }}>
                <View style={[{ height: barHeight, borderColor: barColor }, styles.line]} />
                {newChildren}
                <View style={[{ height: barHeight, borderColor: barColor }, styles.line]} />
            </View>
        ) : (
            <View style={{ height: viewHeight, flexDirection: 'row' }}>
                <View style={[{ height: barHeight, borderColor: barColor }, styles.line]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        flex: 1,
        borderStyle: 'solid'
    }
});

export default Divider;