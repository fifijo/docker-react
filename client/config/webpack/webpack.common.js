const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve('src'),
  entry: {
    app: './client/index.jsx'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader'
        },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/client/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
      inject: 'body'
    })
  ]
}
