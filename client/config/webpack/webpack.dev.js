const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './client/index.js'
    },
    module: {
        rules: [
        {
            use: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        ]
    },
    devServer: {
        port: 3000,
        host: '0.0.0.0',
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000
        }
    }
})
