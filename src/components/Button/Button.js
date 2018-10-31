// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { TouchableOpacity, Text, View } from 'react-native';
import _ from 'lodash';

import { spacing, colors } from '~/styles';
import Icon from '../Icon';

type Props = {
  children?: Node;
  content?: Node;
  onPress?: () => mixed;
  style?: StyleObj;
  primary?: boolean;
  secondary?: boolean;
  compact?: boolean;
  toggle?: boolean;
  active?: boolean;
  positive?: boolean;
  negative?: boolean;
  fluid?: boolean;
  circular?: boolean;
  icon?: boolean | string;
};

const getBackgroundColor = (primary, secondary, color, positive, negative) => {
    if (primary) {
        return colors.colors.primary;
    }

    if (secondary) {
        return colors.colors.secondary;
    }

    if (positive) {
        return colors.colors.green;
    }

    if (negative) {
        return colors.colors.red;
    }

    return _.get(colors.colors, [color], colors.button.default);
};

const getTextColor = (primary, secondary, color, positive, negative) => {
    if (primary || secondary || color || positive || negative) {
        return colors.colors.white;
    }

    return colors.colors.grey;
};

class Button extends PureComponent<Props> {
    static defaultProps = {
        style: {},
        content: null,
        primary: false,
        secondary: false,
        color: colors.button.default,
        compact: false,
        positive: false,
        negative: false,
        fluid: false,
        circular: false,
        icon: false
    };

    render() {
        const { children, onPress, content, primary, secondary, color, compact, positive, negative, fluid, circular, icon } = this.props;

        let selectedChildren = content || children;

        if (_.isString(icon)) {
            selectedChildren = <Icon name={icon} />;
        }

        const backgroundColor = getBackgroundColor(primary, secondary, color, positive, negative);
        const textColor = getTextColor(primary, secondary, color, positive, negative);
        const buttonPadding = (compact || icon) ? spacing.padding.tiny : spacing.padding.small;

        const containerAlign = fluid ? 'stretch' : 'flex-start';

        const borderRadius = circular ? 20 : spacing.border.medium;

        return (
            <View style={{ alignItems: containerAlign, marginHorizontal: spacing.padding.tiny }}>
                <TouchableOpacity onPress={onPress} style={{ minWidth: 40, alignItems: 'center', backgroundColor, borderRadius, padding: buttonPadding }}>
                    {_.isString(selectedChildren) ? <Text style={{ color: textColor }}>{selectedChildren}</Text> : selectedChildren}
                </TouchableOpacity>
            </View>
        );
    }
}

export default Button;