define([
    'indexComponent/indexModel',
    'indexComponent/indexView'
], function(
    IndexModel,
    indexView
) {
    var IndexController = function(options) {
        this.model = new IndexModel(options.title);
        this.view = indexView;
    };
    IndexController.protype.render = function() {
        return this.view();
    };
    return IndexController;
});
