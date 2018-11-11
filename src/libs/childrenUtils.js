// @flow
import React from 'react';
import _ from 'lodash';
import type { Node } from 'react';

export const isNil = (children: ?Node): boolean => children === null
    || children === undefined
    || (Array.isArray(children) && children.length === 0);

// $FlowFixMe
export const cloneWithProps = (child: Node, newProps: Object = {}): Node => React.cloneElement(child, _.merge(newProps, _.get(child, 'props', {})));