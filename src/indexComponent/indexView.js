/** @jsx m */
define(['mithril'], function(m){
    return function(ctrl){
        return m("div", [
            m("h1", [ctrl.model.counter()]),
            m("button", {onclick:ctrl.model.count.bind(ctrl.model)}, [ctrl.model.message()])
        ]);
    };
});