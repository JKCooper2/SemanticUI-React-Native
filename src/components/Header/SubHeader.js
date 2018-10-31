// @flow
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import _ from 'lodash';

import { getFontSize } from './utils';
import { colors } from '~/styles';

import type { SubheaderPropsType } from '#/components/Header';

class SubHeader extends PureComponent<SubheaderPropsType> {
    static defaultProps = {
        as: 'h4'
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