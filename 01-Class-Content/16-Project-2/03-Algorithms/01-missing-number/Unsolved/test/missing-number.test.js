var expect = chai.expect;

describe("missingNumber", function() {
  it(`should return 2 when given the array [3, 0, 1]`, function() {
    var arr = [3, 0, 1];

    var result = missingNumber(arr);

    expect(result).to.eql(2);
  });

  it(`should return 8 when given the array [0, 9, 7, 3, 6, 5, 2, 3, 1, 4]`, function() {
    var arr = [0, 9, 7, 3, 6, 5, 2, 3, 1, 4];

    var result = missingNumber(arr);

    expect(result).to.eql(8);
  });

  it(`should return 1 when given the array [0]`, function() {
    var arr = [0];

    var result = missingNumber(arr);

    expect(result).to.eql(1);
  });

  it(`should return 5 when given the array [0, 2, 1, 4, 3]`, function() {
    var arr = [0, 2, 1, 4, 3];

    var result = missingNumber(arr);

    expect(result).to.eql(5);
  });

  it(`should return 0 when given the array []`, function() {
    var arr = [];

    var result = missingNumber(arr);

    expect(result).to.eql(0);
  });
});
