var webpackConfig = require('./webpack.Config.js');

module.exports = function (config) {
  config.set({
  
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.jsx'],
    preprocessors: {
      'app/tests/**/*.jsx': ['webpack','sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
