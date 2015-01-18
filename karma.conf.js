// Karma configuration
// Generated on Sun Jan 18 2015 02:50:17 GMT-0300 (ART)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'requirejs', 'chai'],


        // list of files / patterns to load in the browser
        files: [{
            pattern: 'test-main.js',
            included: true
        }, {
            pattern: 'test/**/*Spec.js',
            included: false
        }, {
            pattern: 'src/**/*.js',
            included: false
        }, {
            pattern: 'bower_components/**/*.js',
            included: false
        }],


        // list of files to exclude
        exclude: ['src/require.config.js'],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': 'coverage'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage', 'progress'],

        coverageReporter: {
            // specify a common output directory
            dir: 'build/reports/coverage',
            reporters: [
                // reporters not supporting the `file` property
                {
                    type: 'html',
                    subdir: 'report-html'
                }, {
                    type: 'lcov',
                    subdir: 'report-lcov'
                },
                // reporters supporting the `file` property, use `subdir` to directly
                // output them in the `dir` directory
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'cobertura.txt'
                }, {
                    type: 'lcovonly',
                    subdir: '.',
                    file: 'report-lcovonly.txt'
                }, {
                    type: 'teamcity',
                    subdir: '.',
                    file: 'teamcity.txt'
                }, {
                    type: 'text',
                    subdir: '.',
                    file: 'text.txt'
                }, {
                    type: 'text-summary',
                    subdir: '.',
                    file: 'text-summary.txt'
                },
            ]
        },

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
        browsers: ['PhantomJS', 'Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-requirejs',
            'karma-coverage',
            'karma-chai'
        ]
    });
};
