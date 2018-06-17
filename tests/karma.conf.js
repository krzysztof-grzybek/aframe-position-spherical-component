var path = require('path');

module.exports = function (config) {

  config.set({
    basePath: '../',
    files: [
      'tests/index.test.js',
    ],
    browsers: ['Chrome', 'Firefox'],
    preprocessors: {
      'tests/index.test.js': ['webpack', 'sourcemap' ],
    },
    webpack: {
      mode: process.env.NODE_ENV,
      devtool: 'inline-source-map',
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-webpack',
      'karma-sourcemap-loader'
    ]
  });
};
