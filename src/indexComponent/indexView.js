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
        return {tag: "div", attrs: {class:"indexComponent"}, children: [
            {tag: "h1", attrs: {}, children: [indexI18n.greets]}, 
            {tag: "h2", attrs: {}, children: [ctrl.model.counter()]}, 
            "/**" + ' ' +
             "* Comment test" + ' ' +
             "**/", 
            {tag: "button", attrs: {
                class:"indexComponentButton", 
                onclick:ctrl.model.count.bind(ctrl.model)}, children: [
                    ctrl.model.message()
                ]}
        ]};
    };
});