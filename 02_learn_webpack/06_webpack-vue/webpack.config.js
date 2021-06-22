const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require('vue-loader/dist/index')


module.exports = {
    mode:"development",
    // 建立js映射文件，方便代码调试
    devtool:"source-map",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'./build'),
        filename: 'js/bundle.js'
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
            },
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:'babel-loader',
            //         options:{
            //             presets:[
            //                 "@babel/preset-env"
            //             ]
            //         }
            //     }
            // }
            {
                test:/\.js$/,
                loader:"babel-loader" 
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "哈哈哈哈"
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
          }),
        new VueLoaderPlugin()
        
    ]
}