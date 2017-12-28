const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app.js',
        vendor: ['jquery', 'lodash']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: []
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        })
    ]
};