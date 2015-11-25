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
        return <div class="indexComponent">
            <h1>{indexI18n.greets}</h1>
            <h2>{ctrl.model.counter()}</h2>
            <button
                class="indexComponentButton"
                onclick={ctrl.model.count.bind(ctrl.model)}>
                    {ctrl.model.message()}
                </button>
        </div>;
    };
});