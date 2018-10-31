// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { Text } from 'react-native';
import _ from 'lodash';

import { getFontSize } from './utils';
import { colors } from '~/styles';

type Props = {
    children: Node,
    style?: StyleObj,
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
};

class SubHeader extends PureComponent<Props> {
    static defaultProps = {
    };

    render() {
        const { children, style } = this.props;

        if (!_.isString(children)) {
            console.warn('A SubHeader must be passed a string child component');
            return children;
        }

        return (
            <Text style={[{ fontSize: getFontSize(this.props.as, '', 'h4'), color: colors.fonts.subheading }, style]}>{children}</Text>
        );
    }
}

export default SubHeader;