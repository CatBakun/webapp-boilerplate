require.config({
    baseUrl: 'src/',
    paths: {
        'mithril': '../bower_components/mithril/mithril'
    },
    map: {
        '*': {
            'css': '../bower_components/require-css/css.js'
        }
    }
});
