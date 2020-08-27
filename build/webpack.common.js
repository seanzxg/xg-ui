const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = require('./config');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(process.cwd(), './lib'),
        publicPath: '/dist/',
        filename: 'xg-ui.common.js',
        chunkFilename: '[id].js',
        libraryExport: 'default',
        library: 'XGUI',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            main: path.resolve(__dirname, '../src'),
            packages: path.resolve(__dirname, '../packages'),
            examples: path.resolve(__dirname, '../examples'),
            'xg-ui': path.resolve(__dirname, '../')
        },
        modules: ['node_modules']
    },
    externals: config.externals,
    performance: {
        hints: false
    },
    stats: {
        children: false
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: config.jsexclude,
                loader: 'babel-loader'
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
                test: /\.(scss|css)$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
};
