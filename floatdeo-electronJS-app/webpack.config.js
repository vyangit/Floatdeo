const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: [{
          loader: 'babel-loader',
          query: {
              presets:['@babel/preset-react']
            }
          }]
        } 
    ]
  },
  target: 'node'
};