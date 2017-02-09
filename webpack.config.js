'use strict';

const webpack = require('webpack');

module.exports = {
  context: __dirname + '/wwwroot',
  entry: {
    app: './js/app.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components|public\/)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
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
    filename: '[name].bundle.js',
    path: __dirname + '/wwwroot/js'
  }
};