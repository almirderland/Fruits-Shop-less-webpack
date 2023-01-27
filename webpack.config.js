const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require("autoprefixer");
module.exports = {
    mode: process.env.PORT ? process.env.PORT : "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "img/[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    "autoprefixer"
                                ]
                            }
                        }
                    },
                    'less-loader'
                ],
            },
            {
                test: /\.(png|jpg|jped|gif|svg)$/i,
                type: "asset/resource"
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: 'main.css'
        }),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "")
        },
        port: 3010,
        open: true,
        compress: true,
    },
}