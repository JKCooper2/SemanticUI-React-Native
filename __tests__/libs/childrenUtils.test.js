// @flow
import React from 'react';
import { Text } from 'react-native';
import { isNil } from '~/libs/childrenUtils';

test('isNil - null', () => {
    expect(isNil(null)).toBe(true);
});

test('isNil - undefined', () => {
    expect(isNil(undefined)).toBe(true);
});

test('isNil - empty array', () => {
    expect(isNil([])).toBe(true);
});

test('isNil - string', () => {
    expect(isNil('Hello World')).toBe(false);
});

test('isNil - react component', () => {
    expect(isNil(<Text>Hello World</Text>)).toBe(false);
});

test('isNil - react component array', () => {
    let reactArray = [
        <Text key="1">Hello World</Text>,
        <Text key="2">Hello World</Text>
    ];

    expect(isNil(reactArray)).toBe(false);
});
