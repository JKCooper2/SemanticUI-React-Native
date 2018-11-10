// @flow
import React from 'react';
import _ from 'lodash';
import type { Node } from 'react';

export const isNil = (children: ?Node): boolean => children === null
    || children === undefined
    || (Array.isArray(children) && children.length === 0);

export const cloneWithProps = (child: ?Node, newProps: object = {}): Node => React.cloneElement(child, _.merge(newProps, _.get(child, 'props', {})));