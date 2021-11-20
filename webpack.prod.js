const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: {
        index: './src/client/index.js',
        result: './src/client/result.js'
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|ttf)$/,
                loader: "file-loader",
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                },
              },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            inject: true,
            chunks: ['index'],
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "./src/client/views/result.html",
            inject: true,
            chunks: ['result'],
            filename: "result.html"
        }),
        new WorkboxPlugin.GenerateSW()
    ]
}
