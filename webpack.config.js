'use strict'
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: __dirname
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    stats: 'errors-only'
  }
}
