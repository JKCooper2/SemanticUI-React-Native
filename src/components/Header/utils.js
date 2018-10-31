// @flow
import _ from 'lodash';
import { fonts, colors } from '~/styles';

// TODO: Size should be rem vs as being em
const SIZE = {
    huge: 'h1',
    large: 'h2',
    medium: 'h3',
    small: 'h4',
    tiny: 'h5'
};

export const getFontSize = (asProp: string, size: string, fallback = 'h2'): number => {
    let asSize = size && SIZE[size]
        ? SIZE[size]
        : asProp;

    return _.get(fonts.size, [asSize], fonts.size[fallback]);
};

export const getFontColor = (color: string, inverted: boolean, disabled: boolean): string => {
    if (disabled) {
        return colors.fonts.disabled;
    }

    if (inverted) {
        _.get(colors.invertedColors, color, colors.fonts.heading);
    }

    return _.get(colors.colors, color, colors.fonts.heading);
};