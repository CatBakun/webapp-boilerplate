define(['src/main'],function(main){
    describe('base spec', function(){
        it('2 + 2', function(done){
            (2 + 2).should.equal(4);
            done();
        });
        it('should be main', function(done){
            (main).should.equal('main');
            done();
        });
    });
});
