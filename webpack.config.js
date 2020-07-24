const {VueLoaderPlugin} = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        entry: './src/index.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            appendTsSuffixTo: [
                                '\\.vue$'
                            ],
                            happyPackMode: false
                        }
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: 'index.html'
        }),

    ],
    devServer: {
        https: false,
        port: process.env.WEBPACK_PORT || 8080,
        contentBase: path.resolve(__dirname, './dist/'),
    }
};