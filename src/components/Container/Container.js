// @flow
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import _ from 'lodash';

import { childrenUtils } from '~/libs';
import { spacing } from '~/styles';

import type { ContainerPropsType } from '~/types/components/Container';

class Container extends PureComponent<ContainerPropsType> {
    static defaultProps = {
        fluid: false,
        text: false,
        textAlign: 'left',
    };

    render() {
        const { children, content, fluid, text, textAlign, style } = this.props;

        const padding = text && { paddingLeft: spacing.padding.large, paddingRight: spacing.padding.large };
        const alignSelf: {| alignSelf: string |} = _.get(spacing.textAlign, textAlign, spacing.textAlign.left);
        return (
            <View style={[{ flex: fluid ? 1 : 0 }, alignSelf, padding, style]}>
                {childrenUtils.isNil(children) ? content : children}
            </View>
        );
    }
}

export default Container;