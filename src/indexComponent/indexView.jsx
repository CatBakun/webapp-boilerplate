/** @jsx m */
define([
    'mithril',
    'less!indexComponent/indexStyle'
], function(
    m,
    indexStyle
){
    return function(ctrl){
        return <div class="indexComponent">
            <h1>{ctrl.model.counter()}</h1>
            <button class="indexComponentButton" onclick={ctrl.model.count.bind(ctrl.model)}>{ctrl.model.message()}</button>
        </div>;
    };
});