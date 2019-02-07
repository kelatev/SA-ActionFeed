const webpack = require('webpack');

module.exports = {

    entry: './src/index.js',

    output: {
        library: "SAActionFeed"
    },

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },

    plugins: [
        new webpack.IgnorePlugin(/^jquery/)
    ]

};
