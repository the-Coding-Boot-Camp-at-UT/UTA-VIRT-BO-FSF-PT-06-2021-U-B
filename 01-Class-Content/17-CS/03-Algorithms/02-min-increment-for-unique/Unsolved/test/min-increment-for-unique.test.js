var expect = chai.expect;

describe("minIncrement", function() {
  it(`should return 1 if given the array [1, 2, 2]`, function() {
    var arr = [1, 2, 2];

    var result = minIncrement(arr);

    expect(result).to.eql(1);
  });

  it(`should return 6 if given the array [3, 2, 1, 2, 1, 7]`, function() {
    var arr = [3, 2, 1, 2, 1, 7];

    var result = minIncrement(arr);

    expect(result).to.eql(6);
  });

  it(`should return 3 if given the array [8, 6, 8, 9, 10]`, function() {
    var arr = [8, 6, 8, 9, 10];

    var result = minIncrement(arr);

    expect(result).to.eql(3);
  });

  it(`should return 13 if given the array [0, 0, 1, 2, 2, 3, 0]`, function() {
    var arr = [0, 0, 1, 2, 2, 3, 0];

    var result = minIncrement(arr);

    expect(result).to.eql(13);
  });

  it(`should return 0 if given the array [1, 0, 2, -4, 9, 4]`, function() {
    var arr = [1, 0, 2, -4, 9, 4];

    var result = minIncrement(arr);

    expect(result).to.eql(0);
  });

  it(`should return 0 if given the array []`, function() {
    var arr = [];

    var result = minIncrement(arr);

    expect(result).to.eql(0);
  });
});
