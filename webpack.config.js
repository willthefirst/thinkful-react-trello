var path = require('path');
var webpack = require('webpack');
var packageData = require('./package.json');
var filename = [packageData.name, packageData.version, 'js'];
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'app/index.html')
    })]
};
