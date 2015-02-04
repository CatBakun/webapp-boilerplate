/** @jsx m */
define([
    'mithril',
    'css!indexComponent/indexStyle'
], function(
    m,
    indexStyle
){
    return function(ctrl){
        return m("div", {class:"indexComponent"}, [
            m("h1", [ctrl.model.counter()]),
            m("button", {onclick:ctrl.model.count.bind(ctrl.model)}, [ctrl.model.message()])
        ]);
    };
});