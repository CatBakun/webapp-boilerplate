define([
    'indexComponent/indexModel',
    'indexComponent/indexView'
], function(
    IndexModel,
    indexView
) {
    var IndexController = function() {
        this.model = new IndexModel({
            message: 'Click me!'
        });
    };
    return IndexController;
});
