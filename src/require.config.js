require.config({
    baseUrl: 'src/',
    paths: {
        'mithril': '../bower_components/mithril/mithril',
        'i18n': '../bower_components/requirejs-i18n/i18n'
    },
    map: {
        '*': {
            'less': '../bower_components/require-css/css.js'
        }
    }
});
