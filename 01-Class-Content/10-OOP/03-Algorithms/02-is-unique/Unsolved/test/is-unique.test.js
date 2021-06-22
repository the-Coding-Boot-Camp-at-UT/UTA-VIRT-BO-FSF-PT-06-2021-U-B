var expect = chai.expect;

describe("isUnique", function() {
  it("should return true when given the array [2, 8, 7, 5, 4, 3]", function() {
    var arr = [2, 8, 7, 5, 4, 3];

    var result = isUnique(arr);

    expect(result).to.eql(true);
  });

  it("should return true when given the array []", function() {
    var arr = [];

    var result = isUnique(arr);

    expect(result).to.eql(true);
  });

  it("should return false when given the array [-2, 5, -2, 53, 22, 1]", function() {
    var arr = [-2, 5, -2, 53, 22, 1];

    var result = isUnique(arr);

    expect(result).to.eql(false);
  });

  it("should return false when given the array [4, 4, 2, 9, 2, 9, 3, 3, 7, 3]", function() {
    var arr = [4, 4, 2, 9, 2, 9, 3, 3, 7, 3];

    var result = isUnique(arr);

    expect(result).to.eql(false);
  });
});
