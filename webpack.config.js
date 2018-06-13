const path = require('path');

module.exports = {
  devServer: {
    contentBase: __dirname,
    port: 3000
  },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
