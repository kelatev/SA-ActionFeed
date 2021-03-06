const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {

    mode: 'production',

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'sa-action-feed.min.js',
    }

});
