const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

console.log(__dirname);

module.exports = {
  // 模式
  mode: 'production',
  // 入口文件
  entry: {
    main: './index.js'
  },
  // 输出文件
  output: {
    filename: '[name].js',
    // 绝对路径
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: "[name][hash].js"
  },
  resolve: {
    // alias提供别名 在import 和 require 模块时进行对应查找
    alias: {
      'vue': "vue/dist/vue.esm.js"
    }
  },
  module: {
    // 配置loader
    rules: [
      {
        test: /\.vue$/, use: ["vue-loader"]   // Vue-loader 提供对单文件组件的解析
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
      }
    ]
  },
  // 配置插件
  plugins: [
    new VueLoaderPlugin(),
    // html 承载页面输出
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html', // 不指定template时会自动生成对应的html
      inject: true
    }),
  ]
};
