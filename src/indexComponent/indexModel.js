define(['mithril'], function(m) {
    var IndexModel = function(options) {
        this.message = m.prop(options.message);
        this.counter = m.prop(0);
    };
    IndexModel.prototype.count = function() {
        this.counter(this.counter() + 1);
    };
    return IndexModel;
});
