// @flow
import type { Node } from 'react';
import type { ColorsType } from '~/types/styles';

type SizeType = 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';

export type LabelProps = {
    +children?: Node;
    +content?: string;
    +icon?: string;
    color: ColorsType;
    basic: boolean;
    circular: boolean;
    size: SizeType;
}

export type GroupProps = {
    +children?: Node;
    color?: ColorsType;
    basic?: boolean;
    circular?: boolean;
    size?: SizeType;
}

export type DetailProps = {
    +children: string;
};