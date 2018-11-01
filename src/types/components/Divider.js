// @flow
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type DividerPropsType = {
    children?: Node,
    style?: StyleObj,
    fitted: boolean,
    hidden: boolean,
    section: boolean,
    clearing: boolean,
    inverted: boolean,
    content?: string
};
