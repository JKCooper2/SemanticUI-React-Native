// @flow
import { colors } from '~/styles';

export type ColorsType = $Keys<typeof colors.colors> | $Values<typeof colors.colors>;

export type TextAlignType = "left" | "center" | "right";