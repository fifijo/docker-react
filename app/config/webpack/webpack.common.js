const path = require('path')

module.exports = {
  context: path.resolve('src'),
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
    ]
  }
}
