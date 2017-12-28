const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        // app:'./example.js'
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist34'),
        filename: '[name].bundle.js',
        publicPath: './',
        chunkFilename: '[name].bundle.js',
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ]
};