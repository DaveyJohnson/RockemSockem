'use strict';

const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {

    entry: './src/index.js',

    // devServer: {
    //   contentBase: './public',
    //   inline: true,
    //   hot: true
    // },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
        new Dotenv({
            path: './.env',
            safe: true,
            allowEmptyValues: true,
            systemvars: true,
            silent: true,
            defaults: false,
          }),
    ]

};
