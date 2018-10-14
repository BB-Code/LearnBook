var chai = require('chai');
var expect = chai.expect;

describe('some tests',function(){
    it('test equal',function(){
        expect(4+5).to.equal(9);
    })
    it('test not  equal',function(){
        expect(4+5).to.not.equal(10);
    })
    it('test to be true',function(){
        expect(true).to.be.true;
    })
    it('test  object equal',function(){
        expect({"name":"bobo"}).to.not.equal({"name":"bobo"});
        expect({"name":"bobo"}).to.deep.equal({"name":"bobo"});
    })
})