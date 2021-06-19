const path = require("path");


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
                // loader的语法糖
                // loader: 'css-loader'

                // 完整写法
                use: [
                    // {loader: 'css-loader'}
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
            }
        ]
    }
}