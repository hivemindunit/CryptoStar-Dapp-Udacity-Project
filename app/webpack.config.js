const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const DotEnv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CopyWebpackPlugin([{from: "./src/index.html", to: "index.html"}]),
        // new DotEnv(),
    ],
    devServer: {contentBase: path.join(__dirname, "dist"), compress: true},
};
