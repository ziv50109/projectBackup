'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ip = require('ip')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: ip.address(),
    port: 9000,
    historyApiFallback: false,
    noInfo: true,
    open: true,
    openPage: 'index.html'
  }
})

module.exports = devWebpackConfig