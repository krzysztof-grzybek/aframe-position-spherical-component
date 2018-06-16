module.exports = {
  verbose: true,
    mode: process.env.NODE_ENV,
    devServer: {
    contentBase: __dirname,
      publicPath: '/dist',
      port: 3000
  },
  entry: './index.test.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
  },
};w
