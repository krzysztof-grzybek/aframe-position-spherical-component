const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: __dirname,
    publicPath: '/dist',
    port: 3000
  },
  entry: {
    bundle: './index.js',
    example: './example/example.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
};
