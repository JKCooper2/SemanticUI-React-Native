// @flow
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import _ from 'lodash';

import { spacing, colors, fonts } from '~/styles';
import { cloneWithProps } from '~/libs/childrenUtils';

import type { ColorsType } from '~/types/styles';
import type { LabelProps } from '~/types/components/Label';

import Icon from '~/components/Icon';

import Detail from './Detail';
import Group from './Group';


const getBackgroundColor = (color: ColorsType, basic: boolean): string => (basic ? 'white' : _.get(colors.colors, color, colors.colors.lightGrey));

const getBorderColor = (color: ColorsType, basic: boolean): string => _.get(colors.colors, color, basic ? colors.colors.grey : colors.colors.transparent);

const getFontColor = (color: ColorsType, basic: boolean): string => {
    if (basic) {
        return _.get(colors.colors, color, colors.colors.black);
    }

    return color === colors.colors.lightGrey ? 'rgba(0,0,0,.4)' : 'white';
};

// TODO:
// - Image
// - Icon padding

class Label extends PureComponent<LabelProps> {
    static Detail = Detail;

    static Group = Group;

    static defaultProps = {
        children: null,
        color: colors.colors.lightGrey,
        basic: false,
        content: '',
        icon: '',
        circular: false,
        size: 'medium'
    };

    render() {
        const { children, color, basic, content, icon, circular } = this.props;

        // console.log(this.props);

        let backgroundColor: string = getBackgroundColor(color, basic);
        let borderColor: string = getBorderColor(color, basic);
        let fontColor: string = getFontColor(color, basic);

        let textStyles = {
            color: fontColor,
            fontSize: fonts.size.small,
            fontWeight: fonts.weight.bold,
            paddingHorizontal: spacing.padding.small,
            paddingVertical: spacing.padding.tiny
        };

        let childComp = React.Children.map(children, (child) => {
            if (_.get(child, ['type', 'displayName'], '') === 'Detail') {
                return (
                    <View style={{ backgroundColor: 'rgba(0,0,0,.1)', opacity: 0.8 }}>
                        <Text style={textStyles}>{_.get(child, ['props', 'children'], null)}</Text>
                    </View>
                );
            }

            // If is a Text component add the styling underneath the existing styles
            if (_.isString(_.get(child, ['props', 'children'], undefined))) {
                return cloneWithProps(child, { style: textStyles });
            }


            return _.isString(child)
                ? <Text style={textStyles}>{child}</Text>
                : child;
        });

        return (
            <View style={{ borderColor, borderStyle: 'solid', borderWidth: basic ? 1 : 0, flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', backgroundColor, borderRadius: circular ? 20 : spacing.border.medium }}>
                {!!icon && <Icon name={icon} color={fontColor} />}
                {childComp}
                {!!content && <Text style={textStyles}>{content}</Text>}
            </View>
        );
    }
}

export default Label;
