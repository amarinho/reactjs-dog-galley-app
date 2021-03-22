'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const distDirAbsolute = path.join(__dirname,  'dist');

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: distDirAbsolute,
        filename: 'app_[name]_[contenthash].bundle.js',
        chunkFilename: '[name]_[contenthash].bundle.js',
        publicPath: '/',
        pathinfo: false,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 200,
            minRemainingSize: 0,
            maxSize: Infinity,
            minChunks: 1,
            maxAsyncRequests: Infinity,
            maxInitialRequests: Infinity,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            // Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // Fonts and SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, '/public/assets/'), to: path.join(distDirAbsolute, '/assets/') },
            ],
        }),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, '/config'), to: distDirAbsolute },
            ],
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
        compress: true,
        port: 4000,
        open: true,
    },
};
