var expect = chai.expect;

describe("factorial", function() {
  it("should return 24 when given 4", function() {
    var num = 4;

    var result = factorial(num);

    expect(result).to.eql(24);
  });

  it("should return 6 when given 3", function() {
    var num = 3;

    var result = factorial(num);

    expect(result).to.eql(6);
  });

  it("should return 1 when given 0", function() {
    var num = 0;

    var result = factorial(num);

    expect(result).to.eql(1);
  });

  it("should return 1 when given 1", function() {
    var num = 1;

    var result = factorial(num);

    expect(result).to.eql(1);
  });
});
