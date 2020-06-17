const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(__dirname);

module.exports = {
  // 模式
  mode: 'production',
  // 入口文件
  entry: {
    main: './index.js'
  },
  // 开发服务器
  devServer: {
    index: "index.html",
    publicPath: "/",
  },
  // 输出文件
  output: {
    filename: '[name].js',
    // 绝对路径
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // 配置loader
    rules: [
      // { test: /\.js$/, use: 'vue-loader' }
    ]
  },
  // 配置插件
  plugins: [
    // html 承载页面输出
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
};
