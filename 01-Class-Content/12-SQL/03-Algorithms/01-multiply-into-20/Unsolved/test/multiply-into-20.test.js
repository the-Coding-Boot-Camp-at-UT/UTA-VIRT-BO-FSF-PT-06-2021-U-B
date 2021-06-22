var expect = chai.expect;

describe("multiplyInto20", function() {
  it("should return true when given the array [2, 8, 7, 5, 4, 3]", function() {
    var arr = [2, 8, 7, 5, 4, 3];

    var result = multiplyInto20(arr);

    expect(result).to.eql(true);
  });

  it("should return true when given the array [1, 9, 2, 6, 20]", function() {
    var arr = [1, 9, 2, 6, 20];

    var result = multiplyInto20(arr);

    expect(result).to.eql(true);
  });

  it("should return true when given the array [-2, 5, 50, 2, -10, 18, 20]", function() {
    var arr = [-2, 5, 50, 2, -10, 18, 20];

    var result = multiplyInto20(arr);

    expect(result).to.eql(true);
  });

  it("should return false when given the array [4, 8, 15, 16, 23, 42]", function() {
    var arr = [4, 8, 15, 16, 23, 42];

    var result = multiplyInto20(arr);

    expect(result).to.eql(false);
  });

  it("should return false when given the array []", function() {
    var arr = [];

    var result = multiplyInto20(arr);

    expect(result).to.eql(false);
  });

  it("should return false when given the array [-20, -2, -6, -5, -108]", function() {
    var arr = [-20, -2, -6, -5, -108];

    var result = multiplyInto20(arr);

    expect(result).to.eql(false);
  });
});
