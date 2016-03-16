var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/main.js',
  output: { path: path.resolve(__dirname, "public"), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }
    ]
  },
};
