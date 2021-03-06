// @flow
import React, { PureComponent } from 'react';
import { Image as RNImage } from 'react-native';

import _ from 'lodash';

import type { ImagePropsType } from '~/types/components/Image';

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

class Image extends PureComponent<ImagePropsType> {
    static defaultProps = {
        size: 'medium'
    };

    render() {
        const { src, size } = this.props;

        let width: number = _.get(SIZES, size, SIZES.medium);

        return <RNImage source={{ uri: src }} style={{ width, height: width }} resizeMode="contain" />;
    }
}

export default Image;
