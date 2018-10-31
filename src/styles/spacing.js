// @flow

import _ from 'lodash';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const padding = {
    large: 40,
    medium: 20,
    small: 10,
    tiny: 5
};

const border = {
    large: 10,
    medium: 5
};

const TEXT_ALIGN = {
    left: {
        alignSelf: 'flex-start'
    },
    right: {
        alignSelf: 'flex-end'
    },
    center: {
        alignSelf: 'center',
    },
};

const getAlignment = (align: string): StyleObj => _.get(TEXT_ALIGN, align, TEXT_ALIGN.left);

export default {
    padding,
    border,
    getAlignment
};