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
            {
                test:/\.(jpg|png|svg|gif)$/,
                use: {
                    loader:"file-loader",
                    options:{
                        name: 'img/[name]_[hash:6].[ext]'
                    }
                }
            }
        ]
    }
}