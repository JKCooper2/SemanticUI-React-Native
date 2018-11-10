// @flow
import React, { PureComponent } from 'react';
import { Text } from 'react-native';

import type { DetailProps } from '~/types/components/Label';

export default class Detail extends PureComponent<DetailProps> {
    render() {
        return <Text>{this.props.children}</Text>;
    }
}