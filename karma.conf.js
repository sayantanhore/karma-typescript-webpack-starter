const webpackTestConfig = require('./webpack.config.test.js');
module.exports = function(config) {
  config.set({
    basePath: './src',
    files: ['**/*.ts'],
    exclude: ['node_modules/**/*'],
    frameworks: ['jasmine'],
    preprocessors: {
      '**/!(*.spec).ts': ['webpack', 'coverage'],
      '**/*.spec.ts': ['webpack']
    },
    webpack: webpackTestConfig,
    plugins: [
      'karma-jasmine', 
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-coverage',
      'karma-jasmine-html-reporter'
    ],
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    browsers: ['Chrome'],
    client: {
      clearContext: false
    },
    reporters: ['kjhtml', 'coverage']
  })
}