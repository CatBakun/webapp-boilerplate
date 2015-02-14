/** @jsx m */
define([
    'mithril',
    'less!indexComponent/indexStyle'
], function(
    m,
    indexStyle
) {
    return function(ctrl) {
        return m("div", {
            class: "indexComponent"
        }, [
            m("h1", [ctrl.model.counter()]),
            m("button", {
                class: "indexComponentButton",
                onclick: ctrl.model.count.bind(ctrl.model)
            }, [ctrl.model.message()])
        ]);
    };
});
