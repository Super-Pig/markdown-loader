const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  devServer: {
    hotOnly: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.md$/,
      use: [
        'html-loader',
        './markdown-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Garry'
    })
  ]
}