module.exports = function (config) {

  config.set({
    basePath: '../',
    port: 3001,
    files: [
      'tests/index.test.js',
    ],
    browsers: ['Chrome', 'Firefox'],
    preprocessors: {
      'tests/index.test.js': ['webpack'],
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
    },
    frameworks: ['mocha']
  });
};
