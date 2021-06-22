var expect = chai.expect;

before(function() {
  sinon.spy(Array.prototype, "reverse");
});

describe("reverseInPlace", function() {
  it("should reverse an array in place without using the built-in 'reverse' method", function() {
    var arr = [1, 2, 3, 4, 5];
    var reversed = JSON.parse(JSON.stringify(arr)).reverse();
    var result = reverseInPlace(arr);
    expect(result).to.equal(arr);
    expect(result).to.eql(reversed);
    expect(Array.prototype.reverse.calledOnce).to.eql(true);
  });
});
