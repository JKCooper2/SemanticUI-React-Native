const config = {
    presets: [
        'module:metro-react-native-babel-preset',
        '@babel/preset-flow'
    ],
    plugins: [
        ['babel-plugin-root-import', {
            paths: [{
                rootPathPrefix: '~',
                rootPathSuffix: 'src'
            }]
        }]
    ]
};

module.exports = function babelConfig(api) {
    api.cache(false);
    return config;
};
