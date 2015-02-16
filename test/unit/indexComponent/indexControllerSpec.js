define([
    'mithril',
    'indexComponent/indexController'
], function(
    m,
    IndexController
) {
    describe('indexComponent/indexController', function() {
        it('shuld exist an index controller', function(done) {
            IndexController.exists;
            done();
        });
    });
});
