// @flow
import type { Node } from 'react';

export const isNil = (children: ?Node): boolean => children === null
    || children === undefined
    || (Array.isArray(children) && children.length === 0);