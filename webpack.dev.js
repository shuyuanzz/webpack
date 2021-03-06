const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin');

const setMpa = () => {
    let entry = {};
    let htmlWebpackPlugin = [];
    let entryFiles = glob.sync(path.join(__dirname, 'src/*/main.tsx'));
    entryFiles.forEach(item => {
        const math = item.match(/src\/(.*)\/main\.tsx/);
        const pageName = math && math[1];
        entry[pageName] = item;
        htmlWebpackPlugin.push(
            new HtmlWebpackPlugin({
                template: path.join(__dirname, `src/${pageName}/index.html`),
                filename: `${pageName}.html`,
                chunks: [pageName],
                inject: true,
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: false
                }
            }),
        )
    })
    return {
        entry,
        htmlWebpackPlugin
    }
}
const {
    entry,
    htmlWebpackPlugin
} = setMpa();
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    mode: "development",
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader", // 加载过程 类似于push
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /.(png|jpg|svg|jepg)$/,
                use: [{
                    loader: "url-loader", //图片大小小雨10kb时 自动base64进入js文件 从而达到 减少http请求数，优化页面加载性能 基于file-loader
                    options: {
                        limit: 10240 //单位： b
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorPlugin(),
    ].concat(htmlWebpackPlugin),
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        hot: true,
        stats: 'errors-only'
    },
    devtool: 'source-map',
};