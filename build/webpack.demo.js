const path = require('path')
const webpack = require('webpack')
const config = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isProd = process.env.NODE_ENV === 'production'

const webpackConfig = {
    mode: process.env.NODE_ENV,
    devtool: '#eval-source-map',
    entry: 'examples/index.js',
    output: {
        path: path.resolve(process.cwd(), './examples/element-ui/'),
        filename: '[name].[hash:7].js'
    },
    devServer: {
        host: '0.0.0.0',
        port: 8085,
        publicPath: '/',
        hot: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: config.alias,
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules|utils\/popper\.js|utils\/date\.js/
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './examples/index.html',
            filename: './index.html',
            inject: true
        }),
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
}
if (isProd) {
    webpackConfig.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].[contenthash:7].css'
    }))
    webpackConfig.devtool = false
}
module.exports = webpackConfig