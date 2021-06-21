const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // {
            //     test:/\.(jpg|png|svg|gif)$/,
            //     use: {
            //         loader:"url-loader",
            //         options:{
            //             name: 'img/[name]_[hash:6].[ext]',
            //             limit: 100 * 1024
            //         }
            //     }
            // }
            {
                test:/\.(jpg|png|svg|gif)$/,
                type: "asset",
                generator:{
                    filename:'img/[name]_[hash:6][ext]'
                },
                parser:{
                    dataUrlCondition:{
                        maxSize: 100 * 1024
                    }
                }
            },
            // {
            //     test: /\.(eot|ttf|woff2?)$/,
            //     use:{
            //         loader:"file-loader",
            //         options:{
            //             name: "font/[name]_[hash:6].[ext]"
            //         }
            //     }
            // }
            {
                test: /\.(eot|ttf|woff2?)$/,
                type: 'asset/resource',
                generator: {
                    filename:"font/[name]_[hash:6][ext]"
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]
}