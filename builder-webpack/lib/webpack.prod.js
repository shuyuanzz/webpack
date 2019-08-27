/* eslint-disable global-require */
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const cssnano = require('cssnano');
const baseConf = require('./webpack.base');
const projectRoot = process.cwd();
const prodConf = {
    output: {
        path: path.resolve(projectRoot, 'dist'),
        filename: '[name]_[chunkhash:8].js',
    },
    mode: 'production', // 默认开启three-shaking scopehosting。
    plugins: [
        new OptimizeCssAssetsPlugin({
            // 压缩css
            assetNameRegExp: /\.css$/,
            cssnano,
        }),
    ],
    optimization: {
        splitChunks: {
            // 代码分割
            minSize: 0,
            cacheGroups: {
                vendors: {
                    test: /(react|react-dom|axios|react-icons)/,
                    name: 'vendors',
                    chunks: 'all',
                },
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                },
            },
        },
    },
};
module.exports = merge(baseConf, prodConf);
