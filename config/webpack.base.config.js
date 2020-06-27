const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");

module.exports = {
  // 入口文件
  entry: {
    main: './src/main.js'
  },
  // 输出文件
  output: {
    filename: '[name].js',
    // 绝对路径
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    chunkFilename: "static/js/chunk-[name].[chunkhash].js"
  },
  resolve: {
    // alias提供别名 在import 和 require 模块时进行对应查找
    alias: {
      '@': path.resolve('src'),
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
        use: ["vue-style-loader", {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }, 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }, 'postcss-loader', "less-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '/static/fonts/[name].[ext]',
        },
      }
    ]
  },
  // 配置插件
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({}),
    new VueLoaderPlugin(),
    // html 承载页面输出
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),
  ]
};
