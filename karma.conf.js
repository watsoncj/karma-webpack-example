module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['mocha', 'sinon-chai'],

    files: [
      'test/*_test.js',
      'test/**/*_test.js'
    ],

    preprocessors: {
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack']
    },

    webpack: {},

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-sinon-chai"),
      require("karma-chrome-launcher")
    ],

    browsers: [
      'Chrome'
    ]

  });
};
