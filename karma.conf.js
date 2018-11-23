const webpackTestConfig = require('./webpack.config.test.js');
module.exports = function(config) {
  config.set({
    basePath: './src',
    files: ['**/*.ts'],
    exclude: ['node_modules/**/*'],
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.ts': ['webpack']
    },
    webpack: webpackTestConfig,
    plugins: [
      'karma-jasmine', 
      'karma-chrome-launcher',
      'karma-webpack'
    ],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    browsers: ['Chrome'],
    reporters: ['progress']
  })
}