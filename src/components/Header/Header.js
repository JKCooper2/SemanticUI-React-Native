// @flow
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

import { spacing, colors } from '~/styles';

import type { HeaderPropsType } from '~/types/components/Header';

import SubHeader from './SubHeader';
import { getFontSize, getFontColor } from './utils';

// TODO: Icon, Image, Divider
// TODO: Block, Attached

class Header extends PureComponent<HeaderPropsType> {
    static SubHeader = SubHeader;

    static defaultProps = {
        sub: false,
        as: 'h2',
        disabled: false,
        content: '',
        subheader: '',
        color: colors.colors.black,
        textAlign: 'left',
        inverted: false
    };

    render() {
        const { children, size, sub, style, content, subheader, disabled, color, inverted, textAlign } = this.props;

        let textColor = getFontColor(color, inverted, disabled);

        let contentNode = null;

        if (content) {
            if (sub) {
                contentNode = <SubHeader style={style}>{content}</SubHeader>;
            } else {
                contentNode = <Text style={[{ fontSize: getFontSize(this.props.as, size), fontWeight: 'bold', color: textColor }, style]}>{content}</Text>;
            }
        }

        let childComp = React.Children.map(children, (child) => {
            if (!_.isString(child)) {
                return child;
            }

            return sub
                ? <SubHeader style={style}>{child}</SubHeader>
                : <Text style={[{ fontSize: getFontSize(this.props.as, size), fontWeight: 'bold', color: textColor }, style]}>{child}</Text>;
        });

        const alignSelf: {| alignSelf: string |} = _.get(spacing.textAlign, textAlign, spacing.textAlign.left);

        return (
            <View style={[{ padding: spacing.padding.large }, alignSelf]}>
                {contentNode}
                {childComp}
                {!!subheader && <SubHeader>{subheader}</SubHeader>}
            </View>
        );
    }
}

export default Header;
