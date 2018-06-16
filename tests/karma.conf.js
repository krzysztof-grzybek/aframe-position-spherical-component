const path = require('path');

module.exports = (config) => {

  config.set({
    basePath: '../',
    // files: [
    //   { pattern: 'tests/*.js', watched: false },
    // ],
    files: [
      {pattern: 'tests/index.test.js', watched: false},
    ],
    browsers: ['Chrome', 'Firefox'],
    preprocessors: {
      'tests/*.js': ['webpack' ],
    },
    // webpack: {
    //   mode: process.env.NODE_ENV,
    //   devtool: 'inline-source-map'
    // },

    webpack: {
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
    }
  });
};
