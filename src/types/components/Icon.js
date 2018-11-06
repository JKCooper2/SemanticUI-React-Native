// @flow
import type { Node } from 'react';
import type { ColorsType } from '../styles';

export type SizeType = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
type FlippedType = '' | 'horizontal' | 'vertical';
type TypeType =
    | 'antDesign'
    | 'entypo'
    | 'evilIcons'
    | 'feather'
    | 'fontAwesome'
    | 'fontAwesome5'
    | 'foundation'
    | 'ionicons'
    | 'materialCommunityIcons'
    | 'materialIcons'
    | 'octicons'
    | 'simpleLineIcons'
    | 'zocial';

export type IconPropsType = {
    name: string,
    type: TypeType,
    color: ColorsType,
    size: SizeType,
    flipped: FlippedType,
    fitted: boolean,
    loading: boolean,
    disabled: boolean,
    circular: boolean,
    bordered: boolean,
    inverted: boolean
};

export type IconGroupPropsType = {
    children: Node,
    color?: ColorsType,
    size: SizeType
};

export type IconLibraryPropsType = {
    name: string,
    size: number,
    style: any,
    color: ColorsType
};
