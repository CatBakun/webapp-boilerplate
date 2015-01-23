define([
    'mithril',
    'indexComponent/indexView'
], function(
    m,
    indexView
) {
    describe('indexComponent/indexView', function() {
        it('shuld be an index view', function(done) {
            indexView.exists;
            done();
        });
    });
});
