const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  stats: 'minimal',
  devServer: {
    stats: 'errors-only'
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    modules: [
      path.resolve('node_modules'),
      path.resolve('src')
    ],
    alias: {
      Pages: path.resolve(__dirname, 'src/js/pages'),
      Components: path.resolve(__dirname,'src/js/components/'),
      Objects: path.resolve(__dirname, 'src/js/objects'),
      Styles: path.resolve(__dirname, 'src/css/'),
    }
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      }
    ]
  },
  target: 'node',
  watch: true
};