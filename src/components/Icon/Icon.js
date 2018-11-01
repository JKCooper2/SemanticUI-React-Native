// @flow
// https://oblador.github.io/react-native-vector-icons/
import React, { PureComponent } from 'react';
import type { ComponentType } from 'react';

import { View, Animated, StyleSheet, Easing } from 'react-native';
import type AnimatedValue from 'react-native/Libraries/Animated/src/nodes/AnimatedValue';

import _ from 'lodash';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import { spacing, colors } from '~/styles';

import type { IconPropsType, IconLibraryPropsType } from '~/types/components/Icon';
import type { ColorsType } from '~/types/styles';

import IconGroup from './IconGroup';

const SIZES = {
    mini: 8,
    tiny: 12,
    small: 18,
    medium: 24,
    large: 32,
    big: 48,
    huge: 72,
    massive: 96
};

const TYPE = {
    antDesign: AntDesign,
    entypo: Entypo,
    evilIcons: EvilIcons,
    feather: Feather,
    fontAwesome: FontAwesome,
    fontAwesome5: FontAwesome5,
    foundation: Foundation,
    ionicons: Ionicons,
    materialCommunityIcons: MaterialCommunityIcons,
    materialIcons: MaterialIcons,
    octicons: Octicons,
    simpleLineIcons: SimpleLineIcons,
    zocial: Zocial
};

const getColor = (color: ColorsType, disabled: boolean): string => {
    if (disabled) {
        return colors.colors.lightGrey;
    }

    return _.get(colors.colors, color, colors.colors.grey);
};

class Icon extends PureComponent<IconPropsType> {
    static defaultProps = {
        type: 'fontAwesome5',
        color: colors.colors.grey,
        size: 'medium',
        flipped: '',
        fitted: false,
        loading: false,
        disabled: false,
        circular: false,
        bordered: false,
        inverted: false
    };

    static Group = IconGroup;

    spinValue: AnimatedValue;

    constructor(props: IconPropsType) {
        super(props);

        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
    }

    spin = () => {
        if (this.props.loading) {
            this.spinValue.setValue(0);
            Animated.timing(
                this.spinValue,
                {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            ).start(() => this.spin());
        }
    }

    render() {
        const { name, type, color, size, flipped, fitted, loading, disabled, circular, inverted, bordered } = this.props;

        let propStyles = {};

        if (flipped === 'horizontal') {
            propStyles = { ...propStyles, transform: [{ rotate: '90deg' }] };
        }

        if (flipped === 'vertical') {
            propStyles = { ...propStyles, transform: [{ rotate: '270deg' }] };
        }

        let viewSize: number = _.get(SIZES, size, SIZES.medium);

        const spin = loading && this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        let propColor = getColor(color, disabled);

        let IconType: ComponentType<IconLibraryPropsType> = _.get(TYPE, type, TYPE.fontAwesome5);

        let IconComp = (
            <IconType
                name={name}
                size={viewSize}
                style={{ ...propStyles }}
                color={inverted ? colors.colors.white : propColor }
            />
        );

        let borderStyles = {
            borderStyle: 'solid',
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: inverted ? propColor : colors.colors.lightGrey,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: inverted ? propColor : undefined
        };

        if (circular) {
            borderStyles = {
                ...borderStyles,
                borderRadius: viewSize * 1.5 / 2,
                width: viewSize * 1.5,
                height: viewSize * 1.5,
            };
        }

        if (bordered) {
            borderStyles = {
                ...borderStyles,
                borderRadius: 0,
                width: viewSize * 1.2,
                height: viewSize * 1.2,
            };
        }

        if (!circular && !bordered) {
            borderStyles = {};
        }

        return (
            <View style={{ marginHorizontal: fitted ? 0 : spacing.padding.tiny, width: viewSize, height: viewSize, ...borderStyles }}>
                {loading ? (
                    <Animated.View style={{ transform: [{ rotate: spin }] }}>
                        {IconComp}
                    </Animated.View>
                ) : IconComp
                }
            </View>
        );
    }
}

export default Icon;