/** @jsx m */
define([
    'mithril',
    'css!indexComponent/indexStyle'
], function(
    m,
    indexStyle
){
    return function(ctrl){
        return <div class="indexComponent">
            <h1>{ctrl.model.counter()}</h1>
            <button onclick={ctrl.model.count.bind(ctrl.model)}>{ctrl.model.message()}</button>
        </div>;
    };
});