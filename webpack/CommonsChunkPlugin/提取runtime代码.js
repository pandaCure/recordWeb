const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 提取公有代码  只能提取引入的公共的文件
module.exports = {
    entry: {
        page1: './jquery',
        page2: './loash'
    },
    output: {
        path: path.resolve(__dirname, './dist2'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: []
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'runtime']}),
        new HtmlWebpackPlugin({
            filename: 'start.html',
            template: './index.html'
        })
    ]
};