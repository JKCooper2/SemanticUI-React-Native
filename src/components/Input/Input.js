// @flow
import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import _ from 'lodash';

import { colors, spacing } from '~/styles';

import Loader from '~/components/Loader';
import Icon from '~/components/Icon';

import type { Node } from 'react';
import type { InputType } from '~/types/components/Input';


const getIcon = (loading: boolean, icon: string | Node): Node => {
    if (loading) {
        return <Loader active />;
    }

    if (!!icon && _.isString(icon)) {
        let newIcon: string = (icon: any);
        return <Icon name={newIcon} />;
    }

    return icon;
};

const getLabel = (label: string | Node | Object, labelPosition: string): Node => {
    let labelNode = label;

    if (!!label && _.isString(label)) {
        labelNode = <Text style={{ color: colors.colors.grey, fontWeight: 'bold' }}>{label}</Text>;
    } else if(_.isObject(label)) {
        labelNode = <Label {...label} />;
    }

    return (
        <View style={{
            backgroundColor: colors.colors.lightGrey,
            borderTopLeftRadius: labelPosition === 'left' ? spacing.border.medium : 0,
            borderBottomLeftRadius: labelPosition === 'left' ? spacing.border.medium : 0,
            borderTopRightRadius: labelPosition === 'right' ? spacing.border.medium : 0,
            borderBottomRightRadius: labelPosition === 'right' ? spacing.border.medium : 0,
            justifyContent: 'center',
            paddingHorizontal: 10
        }}>
            {labelNode}
        </View>
    );
}

export default class Input extends PureComponent<InputType> {
    static defaultProps = {
        label: null,
        type: 'text',
        onChange: () => {},
        placeholder: '',
        disabled: false,
        loading: false,
        iconPosition: 'right',
        labelPosition: 'left',
        icon: '',
        error: false,
        defaultValue: '',
        transparent: false,
        fluid: false,
    }

    focusInput = () => {
        this._ref.focus();
    }

    render() {
        const { label, type, onChange, placeholder, disabled, loading, iconPosition, icon, error, labelPosition, defaultValue, transparent, fluid, size, value } = this.props;

        let iconNode = getIcon(loading, icon);
        let labelNode = getLabel(label, labelPosition);

        return (
            <View style={{
                alignSelf: fluid ? 'stretch' : 'flex-start',
                flexDirection: 'row',
                borderWidth: transparent ? 0 : StyleSheet.hairlineWidth,
                borderColor: error ? `${colors.colors.red}AA` : colors.colors.lightGrey,
                backgroundColor: error ? '#fff6f6' : colors.colors.white,
                borderStyle: 'solid',
                borderRadius: spacing.border.medium
            }}>
                {labelPosition === 'left' && !!label && labelNode}
                <View
                    onPress={this.focusInput}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: iconPosition === 'right' ? 'space-between' : 'flex-start',
                        paddingHorizontal: 10
                    }}
                >
                    {iconPosition === 'left' && !!iconNode && iconNode}
                    <TextInput
                        ref={component => this._ref = component}
                        secureTextEntry={type === 'password'}
                        onChange={onChange}
                        placeholder={placeholder}
                        editable={!disabled}
                        defaultValue={defaultValue}
                        placeholderTextColor={colors.colors.lightGrey}
                        style={{ minWidth: 150 }}
                        value={value}
                    />
                    {iconPosition === 'right' && !!iconNode && iconNode}
                </View>
                {labelPosition === 'right' && !!label && labelNode}
            </View>
        );
    }
}