const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig, {
  // 模式
  mode: 'production',
  module: {
    // 配置loader
    rules: [
    ]
  },
  // 配置插件
  plugins: [
  ]
});
