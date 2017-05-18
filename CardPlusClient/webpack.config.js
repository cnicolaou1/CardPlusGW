/*
    ./webpack.config.js
*/
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.join(__dirname, './public');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
      path: buildPath,
      filename: 'resources/js/bundle.js'
  },
  devServer: {
      inline: true,
      contentBase: './public',
      port: 8080
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      // 'process.env':{
      //   'NODE_ENV': JSON.stringify('production')
      // }
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
}
