const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
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
                chunks: ['vendors','common',pageName],
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
        filename: "[name]_[chunkhash:8].js"
    },
    mode: "production", // 默认开启three-shaking scopehosting。
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
              },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => {
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last version', '>1%', 'ios 7']
                                })
                            }
                        }


                    },
                    {
                        loader: "px2rem-loader",
                        options: {
                            remUnit: 75,
                            remPreision: 8
                        }
                    }
                ]
            },
            {
                test: /.(png|jpg|svg|jepg)$/,
                use: [{
                    loader: "file-loader", //图片大小小雨10kb时 自动base64进入js文件 从而达到 减少http请求数，优化页面加载性能 基于file-loader
                    options: {
                        name: '[name]_[hash:8][ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css',

        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: require('cssnano')
        }),
            new CleanWebpackPlugin(),
            new FriendlyErrorPlugin()
    ].concat(htmlWebpackPlugin),
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                vendors: {
                    test: /(react|react-dom)/,
                    name: 'vendors',
                    chunks: 'all'
                },
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
    stats:'errors-only'
};