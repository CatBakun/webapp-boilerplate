define([
    'indexComponent/indexController',
    'indexComponent/indexView'
], function(
    IndexController,
    indexView
) {
    return {
        controller: IndexController,
        view: indexView
    };
});
