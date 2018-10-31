// @flow
import React, { PureComponent } from 'react';

import FlagIcon from 'react-native-flags';

import _ from 'lodash';

import type { FlagPropsType } from '~/types/components/Flag';

let SIZES = {
    tiny: 16,
    small: 24,
    medium: 32,
    large: 48,
    big: 64
};

class Flag extends PureComponent<FlagPropsType> {
    static defaultProps = {
        size: 'medium',
        shiny: false
    };

    render() {
        const { name, size, shiny } = this.props;

        let viewSize = _.get(SIZES, size, SIZES.medium);

        return (
            <FlagIcon
                code={name.toUpperCase()}
                size={viewSize}
                type={shiny ? 'shiny' : 'flat'}
            />
        );
    }
}

export default Flag;