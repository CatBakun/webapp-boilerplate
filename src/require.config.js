require.config({
    baseUrl: 'src/',
    paths: {
        'mithril': '../bower_components/mithril/mithril'
    },
    map: {
        '*': {
            'less': '../bower_components/require-css/css.js'
        }
    }
});
