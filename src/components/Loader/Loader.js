// @flow
import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import type { LoaderProps } from '~/types/components/Loader';

class Loader extends PureComponent<LoaderProps> {
    static defaultProps = {
        active: false,
        inverted: false
    }

    render() {
        let { children, content, active, inverted } = this.props;

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    animating={active}
                    color={inverted ? 'white' : 'black'}
                />
                {(!!children || !!content) && (
                    <Text style={{ color: inverted ? 'white' : 'black' }}>{children || content}</Text>
                )}
            </View>
        );
    }
}

export default Loader;