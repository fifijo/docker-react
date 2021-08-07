const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: '[name][contenthash].bundle.js'
  }
})
