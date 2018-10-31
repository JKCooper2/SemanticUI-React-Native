// @flow
import React, { PureComponent } from 'react';
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import { View, Image } from 'react-native';

import _ from 'lodash';

import { spacing, fonts, colors } from '~/styles';

type Props = {
    src: string;
    size?: string;
};

let SIZES = {
    mini: 20,
    tiny: 50,
    small: 100,
    medium: 180,
    large: 300,
    big: 450,
    huge: 600,
    massive: 800
};


class Icon extends PureComponent<Props> {
    static defaultProps = {
        size: 'medium',
    };

    render() {
        const { src, size } = this.props;

        let width = _.get(SIZES, size, SIZES.medium);

        return (
            <Image
                source={{ uri: src }}
                style={{ width, height: width }}
                resizeMode="contain"
            />
        );
    }
}

export default Icon;