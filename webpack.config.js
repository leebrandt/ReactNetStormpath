'use strict';

const webpack = require('webpack');

module.exports = {
  context: __dirname + '/wwwroot',
  entry: {
    app: './js/app.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|public\/)/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: { sourceMaps: true }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: ["wwwroot/scss"],
            sourceMaps: true
          }
        }]
    }]
  },
  output: {
    path: __dirname + 'wwwroot/js',
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    sourceMapFilename: '[file].map'
  }
};