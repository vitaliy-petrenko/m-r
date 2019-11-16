'use strict';
const NODE_ENV = process.env.NODE_ENV;
const webpack = require('webpack');

let config = {
    entry: './src/index',
    output: {
        filename: './build/build.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.sass$/,
            loaders: 'style-loader!css?sourceMap!sass?sourceMap'
        },  {
            test: /\.(jpg|svg|png)$/,
            loader: 'file-loader',
            query: {
                name: 'build/assets/[name].[ext]'
            }
        }, {
            test: /\.(otf|eot|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            query: {
                name: 'build/assets/[name].[ext]'
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NoErrorsPlugin()
    ]
};
//production
if (NODE_ENV == 'production') {
    Object.assign(config, {
        devtool: ''
    });
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                dead_code: false
            }
        })
    )
}
module.exports = config;