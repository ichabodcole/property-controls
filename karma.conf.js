// Karma configuration
// Generated on Thu Apr 02 2015 00:30:27 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify', 'phantomjs-shim'],


    browserify: {
        debug: true,
        transform: ['babelify'],
        configure: function(bundle) {
            bundle.on('prebundle', function() {
                bundle.add('babelify/polyfill')
            })
        }
    },

    // list of files / patterns to load in the browser
    files: [
        'lib/**/*.js',
        // { pattern: 'lib/test.js' },
        // './node_modules/babelify/node_modules/babel-core/browser-polyfill.js',
        //{ pattern: 'lib/test.js', included:false, served: true },
        // { pattern: 'lib/property-controls/**/*.js', included:false, served: true },
        'test/specs/**/*.spec.js'
        // 'test/specs/property-controls/**/*.spec.js'
        // { pattern: 'test/specs/test.spec.js', included:false, served: true }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'lib/**/*.js': ['browserify'],
        'test/specs/**/*.spec.js': ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['nyan'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
