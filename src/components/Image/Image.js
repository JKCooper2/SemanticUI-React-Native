// @flow
import React, { PureComponent } from 'react';
import { Image } from 'react-native';

import _ from 'lodash';

import type { ImagePropsType } from '#/components/Image';

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

class Icon extends PureComponent<ImagePropsType> {
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