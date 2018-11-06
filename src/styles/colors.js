// @flow

const colors = {
    black: '#1b1c1d',
    white: '#fff',
    red: '#db2828',
    orange: '#f2711c',
    yellow: '#fbbd08',
    olive: '#b5cc18',
    green: '#21ba45',
    teal: '#00b5ad',
    blue: '#2185d0',
    purple: '#a333c8',
    violet: '#6435c9',
    pink: '#e03997',
    brown: '#a5673f',
    grey: '#767676',
    lightGrey: '#e8e8e8',
    transparent: 'transparent'
};

const invertedColors = {
    white: '#fff',
    red: '#ff5144',
    orange: '#ff7701',
    yellow: '#ffdf05',
    olive: '#d8ea5c',
    green: '#22be34',
    teal: '#54ffff',
    blue: '#3ac0ff',
    violet: '#8a73ff',
    purple: '#d65aff',
    pink: '#ff74d8',
    brown: '#c86f11',
    grey: '#cfd0d2',
    black: '#000',
    lightGrey: '#e8e8e8',
    transparent: 'transparent'
};

const fonts = {
    heading: colors.black,
    subheading: colors.grey,
    disabled: colors.lightGrey
};

const button = {
    default: colors.lightGrey
};

export default {
    colors: {
        ...colors,
        primary: colors.blue,
        secondary: colors.black
    },
    invertedColors: {
        ...invertedColors,
        primary: invertedColors.blue,
        secondary: invertedColors.black
    },
    fonts,
    button
};
