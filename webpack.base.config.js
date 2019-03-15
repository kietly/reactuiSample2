const PATH = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV = PATH.resolve(__dirname, "src");
const OUTPUT = PATH.resolve(__dirname, "dist");
const PUBLIC = PATH.resolve(__dirname, "public");

const CONFIG = {
    entry: DEV + "/index.tsx", // Entry point to the JS application
    output: {
        path: OUTPUT,
        filename: "main.js"
        // publicpath is not specified here. Look in config for specific env to see what it is.
        // THis is the base path if the application is deployed in tomcat and u want to have all the routes prefixed properly
    },
    module: { // By default webpack understands js and json. In order to make sure it understands tsx and css we need to define those 
        // here
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            },
            // extract image files
            {
                test: /\.(jpe?g|png|gif|svg)(?:\?.*|)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=assets/images/[name].[ext]'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PUBLIC + '/index.html'
        })
    ]
};

module.exports = CONFIG;