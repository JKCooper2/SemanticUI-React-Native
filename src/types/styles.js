// @flow
import _ from 'lodash';
import { colors } from '~/styles';

let colorsValues = _.invert(colors.colors);

// TODO: Flow typing on color values doesn't work properly
export type ColorsType = $Keys<typeof colors.colors> | $Keys<typeof colorsValues>;

export type TextAlignType = 'left' | 'center' | 'right';
