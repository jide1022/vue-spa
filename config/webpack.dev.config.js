const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")


module.exports = {
  // 模式
  mode: 'development',
  // 入口文件
  entry: {
    main: './src/main.js'
  },
  // 输出文件
  output: {
    filename: '[name].js',
    // 绝对路径
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: "[chunkhash].js"    //使用chunkhash
  },
  resolve: {
    // alias提供别名 在import 和 require 模块时进行对应查找
    alias: {
      '@': path.resolve('src'),  //路劲别名
      'vue': "vue/dist/vue.esm.js"
    }
  },
  // 开发服务器
  devServer: {
    index: "index.html",
    publicPath: "/",
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
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: '[path][name].[ext]',
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  // 配置插件
  plugins: [
    // 变量注入
    new webpack.DefinePlugin({
      'env': '11111',
    }),
    new VueLoaderPlugin(),
    // html 承载页面输出
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),
  ]
};
