module.exports = function () {
    return { 
        "presets": [
            "module:metro-react-native-babel-preset",
            "flow"
        ],
        "plugins": [
            ["babel-plugin-root-import", {
                "paths": [{
                    "rootPathPrefix": "~",
                    "rootPathSuffix": "src"
                }]
            }]
        ]
    }
}
