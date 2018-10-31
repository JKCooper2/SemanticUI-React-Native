// @flow
import type { Node } from 'react';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import type { ColorsType } from '../styles';

export type ButtonPropsType = {
    children?: Node;
    content: string;
    onPress?: () => mixed;
    style?: StyleObj;
    primary: boolean;
    secondary: boolean;
    compact: boolean;
    toggle: boolean;
    active: boolean;
    positive: boolean;
    negative: boolean;
    fluid: boolean;
    circular: boolean;
    icon: boolean | string;
    color: ColorsType;
  };