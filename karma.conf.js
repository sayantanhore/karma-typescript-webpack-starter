const webpackConfig = require('./webpack.config.test');
module.exports = function(config) {
  config.set({
    basePath: './src',
    files: ['**/*.spec.ts'],
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.spec.ts': ['webpack']
    },
    webpackConfig: webpackConfig,
    plugins: [
      'karma-jasmine', 
      'karma-chrome-launcher',
      'karma-webpack'
    ],
    browsers: ['Chrome'],
    reporters: ['progress']
  })
}