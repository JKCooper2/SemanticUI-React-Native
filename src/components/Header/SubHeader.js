// @flow
import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import _ from 'lodash';

import { getFontSize } from './utils';
import { colors } from '~/styles';

import type { SubheaderPropsType } from '~/types/components/Header';

class SubHeader extends PureComponent<SubheaderPropsType> {
    static defaultProps = {
        as: 'h4'
    };

    render() {
        const { children, style, as: asProp } = this.props;

        return (
            _.isString(children)
                ? <Text style={[{ fontSize: getFontSize(asProp, null, 'h4'), color: colors.fonts.subheading }, style]}>{children}</Text>
                : children
        );
    }
}

export default SubHeader;