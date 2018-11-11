// @flow
import type { Node } from 'react';
import type { ColorsType } from '~/types/styles';

export type SegmentProps = {
    +children: Node;
    +content?: string;
    +placeholder: boolean;
    +padded: boolean | "very";
    +compact: boolean;
    +color?: ColorsType;
    +inverted: boolean;
    +secondary: boolean;
    +tertiary: boolean;
    +circular: boolean;
    +style?: Object;
    +basic: boolean;
}

export type InlineProps = {
    +children: Node;
}