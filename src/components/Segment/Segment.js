// @flow
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

import { spacing, colors } from '~/styles';

import type { SegmentProps } from '~/types/components/Segment';
import type { ColorsType } from '~/types/styles';

import Inline from './Inline';

const getPadding = (padding: boolean | "very"): number => {
    if (padding === 'very') {
        return spacing.padding.huge;
    }

    if (padding === true) {
        return spacing.padding.large;
    }

    return spacing.padding.medium;
};

const getBackgroundColor = (placeholder: boolean, color: ?ColorsType, inverted: boolean, secondary: boolean, tertiary: boolean): string => {
    if (inverted) {
        let backgroundColor = _.get(colors.colors, color, colors.colors.black);

        if (secondary) {
            return `${backgroundColor}AA`;
        }

        if (tertiary) {
            return `${backgroundColor}44`;
        }

        return backgroundColor;
    }

    if (secondary || placeholder) {
        return colors.colors.lightestGrey;
    }

    if (tertiary) {
        return colors.colors.lightGrey;
    }

    return colors.colors.white;
};

const getFontColor = (inverted: boolean, secondary: boolean, tertiary: boolean): ColorsType => {
    if (inverted && (secondary || tertiary)) {
        return colors.colors.lightGrey;
    }

    if (inverted) {
        return colors.colors.white;
    }

    if (secondary || tertiary) {
        return colors.colors.darkGrey;
    }

    return colors.colors.black;
};

const getBorderColor = (backgroundColor: string): string => {
    if (backgroundColor === colors.colors.white) {
        return colors.colors.lightGrey;
    }

    return backgroundColor;
};

// TODO: Figure out box-shadow
class Segment extends PureComponent<SegmentProps> {
    static Inline = Inline;

    static defaultProps = {
        placeholder: false,
        padded: false,
        compact: false,
        inverted: false,
        secondary: false,
        tertiary: false,
        style: {},
        circular: false,
        basic: false
    }

    render() {
        let { children, placeholder, padded, compact, color, inverted, secondary, tertiary, style, circular, basic } = this.props;

        let fontColor = getFontColor(inverted, secondary, tertiary);

        let childComp = React.Children.map(children, child => (_.isString(child)
            ? <Text style={{ color: fontColor }}>{child}</Text>
            : child
        ));

        let backgroundColor = getBackgroundColor(placeholder, color, inverted, secondary, tertiary);
        let borderColor = getBorderColor(backgroundColor);

        let borderTopWidth = 1;
        if (color && !inverted) {
            borderTopWidth = 2;
        }
        if (basic) {
            borderTopWidth = 0;
        }

        return (
            <View style={{
                alignSelf: compact ? 'flex-start' : 'stretch',
                alignItems: (placeholder || circular) ? 'center' : 'flex-start',
                justifyContent: circular ? 'center' : 'flex-start',
                backgroundColor,
                padding: getPadding(padded),
                borderColor,
                borderStyle: 'solid',
                borderWidth: basic ? 0 : 1,
                borderTopWidth,
                borderTopColor: _.get(colors.colors, color, colors.colors.lightGrey),
                borderRadius: circular ? 1000 : spacing.border.medium,
                ...style
            }}>
                {childComp}
            </View>
        );
    }
}

export default Segment;