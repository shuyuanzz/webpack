const merge = require("webpack-merge");
const baseConf = require("./webpack.base");

const devConf = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new webpack.NamedModulesPlugin(), //当开启 HMR 的时候使用该插件会显示模块的相对路径
    new webpack.HotModuleReplacementPlugin() //模块热替换
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    stats: "errors-only"
  },
  devtool: "source-map" //source map
};
module.exports = merge(baseConf, devConf);
