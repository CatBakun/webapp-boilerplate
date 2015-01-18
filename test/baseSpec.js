define(['app', 'mithril'], function(app, m) {
    describe('base spec', function() {
        it('2 + 2', function(done) {
            (2 + 2).should.equal(4);
            done();
        });
        it('should be app', function(done) {
            (app).should.equal(m);
            done();
        });
    });
});
