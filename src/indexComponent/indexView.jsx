define(['mithril'], function(m){
    return function(model){
        return <div>
            <p>{model.counter()}</p>
            <button onclick={model.count()}>{model.message()}</button>
        </div>
    };
});