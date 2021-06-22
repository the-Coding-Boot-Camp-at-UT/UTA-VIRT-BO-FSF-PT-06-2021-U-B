var expect = chai.expect;

before(function() {
  sinon.spy(Math, "sqrt");
});

describe("sqrt", function() {
  it(`should return 2 when given 4`, function() {
    var num = 4;

    var result = sqrt(num);
    
    expect(result).to.eql(2);
  });

  it(`should return 2 when given 8`, function() {
    var num = 8;

    var result = sqrt(num);
    
    expect(result).to.eql(2);
  });

  it(`should return 0 when given 0`, function() {
    var num = 0;

    var result = sqrt(num);
    
    expect(result).to.eql(0);
  });

  it(`should not use the built-in Math.sqrt method`, function() {
    var called = Math.sqrt.called;

    expect(called).to.eql(false);
  });
});
