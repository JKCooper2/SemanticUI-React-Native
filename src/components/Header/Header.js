// @flow
import React, { PureComponent } from 'react';

import { View, Text } from 'react-native';
import _ from 'lodash';

import { spacing } from '~/styles';
import type { colorsType } from '~/styles/colors';

import { getFontSize, getFontColor } from './utils';

import SubHeader from './SubHeader';

type Props = {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    size?: "huge" | "large" | "medium" | "small" | "tiny",
    sub?: boolean,
    content?: string,
    subheader?: string,
    disabled?: boolean,
    color?: colorsType,
    textAlign?: "left" | "center" | "right"
};

// TODO: Icon, Image, Divider
// TODO: Block, Attached
// FIXME: floated doesn't exist

class Header extends PureComponent<Props> {
    static SubHeader = SubHeader;

    static defaultProps = {
        sub: false,
        disabled: false,
        content: '',
        subheader: '',
        color: 'black',
        textAlign: 'left'
    };

    render() {
        const { children, size, sub, style, content, subheader, disabled, color, inverted, textAlign } = this.props;

        let node = null;

        let stringChild = _.isString(children) ? children : content;
        let textColor = getFontColor(color, inverted, disabled);

        if (stringChild) {
            if (sub) {
                node = <SubHeader style={style}>{stringChild}</SubHeader>;
            } else {
                node = <Text style={[{ fontSize: getFontSize(this.props.as, size), fontWeight: 'bold', color: textColor }, style]}>{stringChild}</Text>;
            }
        }

        return (
            <View style={[{ padding: spacing.padding.large }, spacing.getAlignment(textAlign)]}>
                {node}
                {!!subheader && <SubHeader>{subheader}</SubHeader>}
            </View>
        );
    }
}

export default Header;