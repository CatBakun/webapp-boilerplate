define([
    'mithril',
    'indexComponent/indexModel'
], function(
    m,
    IndexModel
) {
    describe('indexComponent/indexModel', function() {
        it('shuld exist an index model', function(done) {
            IndexModel.exists;
            done();
        });
    });
});
