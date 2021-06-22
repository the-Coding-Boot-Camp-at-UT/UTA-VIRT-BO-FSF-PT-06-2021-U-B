var expect = chai.expect;

describe("maxNum", function() {
  it("returns the largest number in a given array", function() {
    var arr = [2, 3, -2, 99, 100, 2222, 321];

    var result = maxNum(arr);

    expect(result).to.eql(2222);
  });
});
