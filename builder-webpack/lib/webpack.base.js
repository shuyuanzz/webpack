<<<<<<< HEAD
/* eslint-disable global-require */
=======
>>>>>>> parent of cc577ef... add somoke test
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
<<<<<<< HEAD
const path = require("path");
const glob = require("glob");
const autoprefixer = require("autoprefixer");
const projectRoot = process.cwd();

const setMpa = () => {
  const entry = {};
  const htmlWebpackPlugin = [];
  const entryFiles = glob.sync(path.join(projectRoot, "src/*/main.tsx"));
=======
const setMpa = () => {
  let entry = {};
  let htmlWebpackPlugin = [];
  let entryFiles = glob.sync(path.join(__dirname, "src/*/main.tsx"));
>>>>>>> parent of cc577ef... add somoke test
  entryFiles.forEach(item => {
    const math = item.match(/src\/(.*)\/main\.tsx/);
    const pageName = math && math[1];
    entry[pageName] = item;
    htmlWebpackPlugin.push(
      new HtmlWebpackPlugin({
<<<<<<< HEAD
        template: path.join(projectRoot, `src/${pageName}/index.html`),
=======
        template: path.join(__dirname, `src/${pageName}/index.html`),
>>>>>>> parent of cc577ef... add somoke test
        filename: `${pageName}.html`,
        chunks: ["vendors", "common", pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    );
  });
  return {
    entry,
    htmlWebpackPlugin
  };
};
const { entry, htmlWebpackPlugin } = setMpa();
module.exports = {
<<<<<<< HEAD
  entry,
=======
  entry: entry,
>>>>>>> parent of cc577ef... add somoke test
  resolve: {
    extensions: [".tsx", ".ts", ".js", "jsx"]
  },
  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.tsx?$/, // 解析tsx
        use: "ts-loader"
      },
      {
        test: /\.css$/, // 解析css
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/, // 解析less 样式增强
=======
        test: /\.tsx?$/, //解析tsx
        use: "ts-loader"
      },
      {
        test: /\.css$/, //解析css
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/, //解析less 样式增强
>>>>>>> parent of cc577ef... add somoke test
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => {
<<<<<<< HEAD
                autoprefixer({
=======
                require("autoprefixer")({
>>>>>>> parent of cc577ef... add somoke test
                  overrideBrowserslist: ["last version", ">1%", "ios 7"]
                });
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
<<<<<<< HEAD
        test: /.(png|jpg|svg|jepg)$/, // 解析图片
        use: [
          {
            loader: "file-loader", // 图片大小小于10kb时 自动base64进入js文件 从而达到 减少http请求数，优化页面加载性能 基于file-loader
=======
        test: /.(png|jpg|svg|jepg)$/, //解析图片
        use: [
          {
            loader: "file-loader", //图片大小小于10kb时 自动base64进入js文件 从而达到 减少http请求数，优化页面加载性能 基于file-loader
>>>>>>> parent of cc577ef... add somoke test
            options: {
              name: "[name]_[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
<<<<<<< HEAD
    new CleanWebpackPlugin(), // 清理构建目录
    new FriendlyErrorPlugin(), // 命令行信息显示优化
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css"
    }) // css提取成单独的css文件
  ].concat(htmlWebpackPlugin), // 多页面打包
=======
    new CleanWebpackPlugin(), //清理构建目录
    new FriendlyErrorPlugin(), //命令行信息显示优化
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css"
    }) //css提取成单独的css文件
  ].concat(htmlWebpackPlugin), //多页面打包
>>>>>>> parent of cc577ef... add somoke test
  stats: "errors-only"
};
