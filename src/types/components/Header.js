// @flow
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type { ColorsType, TextAlignType } from '../styles';

export type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type SizeType = "huge" | "large" | "medium" | "small" | "tiny";

export type HeaderPropsType = {
    as: AsType;
    size?: SizeType;
    sub: boolean;
    content: string;
    subheader: string;
    disabled: boolean;
    color: ColorsType;
    textAlign: TextAlignType;
    inverted: boolean;
    style?: StyleObj;
    children?: Node;
};

export type SubheaderPropsType = {
    children: Node,
    style?: StyleObj,
    as: AsType
};