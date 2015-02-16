/** @jsx m */
define([
    'mithril',
    'i18n!indexComponent/nls/indexI18n',
    'less!indexComponent/indexStyle'
], function(
    m,
    indexI18n,
    indexStyle
){
    return function(ctrl){
        return m("div", {class:"indexComponent"}, [
            m("h1", [indexI18n.greets]),
            m("h2", [ctrl.model.counter()]),
            m("button", {class:"indexComponentButton", onclick:ctrl.model.count.bind(ctrl.model)}, [ctrl.model.message()])
        ]);
    };
});