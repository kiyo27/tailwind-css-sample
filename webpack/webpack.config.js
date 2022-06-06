const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    another: './src/another.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Development',
      chunks: ['app'],
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    })
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  // }
}