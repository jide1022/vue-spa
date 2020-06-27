const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');


module.exports = merge(baseConfig, {
  // 模式
  mode: 'development',
  // 开发服务器
  devServer: {
    index: "index.html",
    publicPath: "/",
  },
  module: {
    // 配置loader
    rules: []
  },
  // 配置插件
  plugins: [

  ]
});
