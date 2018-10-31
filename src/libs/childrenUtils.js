/**
 * Tests if children are nil in React and Preact.
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
export const isNil = children => children === null
    || children === undefined
    || (Array.isArray(children) && children.length === 0);