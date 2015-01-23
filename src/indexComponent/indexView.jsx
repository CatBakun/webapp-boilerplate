/** @jsx m */
define(['mithril'], function(m){
    return function(ctrl){
        return <div>
            <h1>{ctrl.model.counter()}</h1>
            <button onclick={ctrl.model.count.bind(ctrl.model)}>{ctrl.model.message()}</button>
        </div>;
    };
});