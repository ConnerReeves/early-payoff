const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: '#inline-source-map',
  entry: path.join(__dirname, 'client/index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style!css!sass?sourceMap'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
};
