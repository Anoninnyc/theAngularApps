// Karma configuration
// Generated on Wed Oct 12 2016 18:06:39 GMT+1100 (Bougainville Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    './node_modules/angular/angular.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js',
    './node_modules/angular-ui-router/release/angular-ui-router.js', 
    './node_modules/angular-route/angular-route.js',
    './node_modules/angular-mocks/angular-mocks.js',
    './node_modules/angular-sanitize/angular-sanitize.js',
    'https://krishanmarya.herokuapp.com/socket.io/socket.io.js',
    './client/bundle.js',
    './tests/jasmineTest.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 49567,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
