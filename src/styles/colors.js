// TODO: Get proper colours
const colors = {
    black: 'black',
    white: 'white',
    red: '#db2828',
    orange: 'orange',
    yellow: 'yellow',
    olive: 'olive',
    green: 'green',
    teal: 'teal',
    blue: 'blue',
    purple: 'purple',
    violet: 'violet',
    pink: 'pink',
    brown: 'brown',
    grey: 'grey',
    lightGrey: '#d3d3d3',
    transparent: 'transparent',
    primary: 'blue',
    secondary: 'black'
};

// TODO: Invert Colors
const invertedColors = colors;

export type colorsType = "black" | "white" | "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "purple" | "violet" | "pink" | "brown" | "grey" | "lightGrey";

const fonts = {
    heading: colors.black,
    subheading: colors.grey,
    disabled: colors.lightGrey
};

const button = {
    default: colors.lightGrey
};

export default {
    colors,
    invertedColors,
    fonts,
    button
};