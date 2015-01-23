require([
    'mithril',
    'app'
], function(
    m,
    app
) {
    m.module(document.getElementById("app-container"), app);
});
