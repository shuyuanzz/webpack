const webpack = require("webpack");
const path = require("path");
const rimraf = require("rimraf");
const Mocha = require("mocha");
const mocha = new Mocha({
  timeout: "1000ms"
});
process.chdir(path.join(__dirname, "template"));
rimraf("./dist", () => {
  const prodConf = require("../../lib/webpack.prod");
  webpack(prodConf, (err, stats) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false
      })
    );
    console.log('package compilation finished. test begain!')
    mocha.addFile(path.join(__dirname,'html-test.js'));
    mocha.addFile(path.join(__dirname,'js-css-test.js'));
    mocha.run();
  });
});
