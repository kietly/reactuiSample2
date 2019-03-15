const merge = require('webpack-merge');
const common = require('../webpack.base.config');

const config = {
    mode: 'development', // Enables webpack built-in optimization for appropriate environments
    devtool: 'cheap-module-source-map', // chooses a style of source mapping to enhance debugging
    output: {
        publicPath: "/" // For dev the root path is just the /
    },
    module: {
        rules: [
            // CSS files
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader' // translates CSS into common js modules
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 8081,
        contentBase: './dist'
    }
}

module.exports = merge(common, config);