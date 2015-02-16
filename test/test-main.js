var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',

    paths: {
        'mithril': '../bower_components/mithril/mithril',
        'i18n': '../bower_components/requirejs-i18n/i18n'
    },
    // require-css map config works only with abs path in this context. 
    map: {
        '*': {
            'less': '/base/bower_components/require-css/css.js'
        }
    },
    config: {
        //Set the config for the i18n
        //module ID
        i18n: {
            locale: 'fr-fr'
        }
    },
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
