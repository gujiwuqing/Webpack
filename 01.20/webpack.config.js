const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, 'build')
    }
}