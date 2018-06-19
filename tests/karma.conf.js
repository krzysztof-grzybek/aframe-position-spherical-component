module.exports = function (config) {

  config.set({
    basePath: '../',
    port: 3001,
    files: [
      'tests/index.test.js',
    ],
    preprocessors: {
      'tests/index.test.js': ['webpack'],
    },
    frameworks: ['mocha'],
    browsers: ['Chrome', 'Firefox'],
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
    },
    client: {
      mocha: { ui: 'tdd' },
    },
    reporters: ['mocha']
  });
};
