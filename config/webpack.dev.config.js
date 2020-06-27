const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


module.exports = merge(baseConfig, {
  // 模式
  mode: 'development',
  // 开发服务器
  devServer: {
    host: "0.0.0.0",
    hot: true,
    port: 8080,
    open: true,
    inline: true,
    index: "index.html",
    noInfo: false,
    publicPath: "/",
  },
  devtool: 'source-map',
  module: {
    // 配置loader
    rules: []
  },
  // 配置插件
  plugins: [

  ]
});
