// @flow
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import type { TextAlignType } from '../styles';

export type ContainerPropsType = {
    children?: Node,
    content?: Node,
    fluid: boolean,
    text: boolean,
    textAlign: TextAlignType,
    style?: StyleObj
  };