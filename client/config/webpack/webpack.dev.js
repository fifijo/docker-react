const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './client/index.jsx'
  },
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    hotOnly: true,
    sockPort: 8080,
    overlay: {
      warnings: true,
      errors: true,
    },
    watchOptions: {
      aggregateTimeout: 500,
      poll: 1000
    }
  }
})
