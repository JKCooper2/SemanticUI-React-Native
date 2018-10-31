// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { View } from 'react-native';

import { childrenUtils } from '~/libs';
import { spacing } from '~/styles';

type Props = {
  children?: Node,
  content?: Node,
  fluid?: boolean,
  text?: boolean,
  textAlign?: "left" | "center" | "right",
  style?: StyleObj
};

class Container extends PureComponent<Props> {
    static defaultProps = {
        fluid: false,
        text: false,
        content: null,
        textAlign: 'left',
        style: {}
    };

    render() {
        const { children, content, fluid, text, textAlign, style } = this.props;

        const padding = text && { paddingLeft: spacing.large, paddingRight: spacing.large };

        return (
            <View style={[{ flex: fluid ? 1 : 0 }, padding, spacing.getAlignment(textAlign), style]}>
                {childrenUtils.isNil(children) ? content : children}
            </View>
        );
    }
}

export default Container;