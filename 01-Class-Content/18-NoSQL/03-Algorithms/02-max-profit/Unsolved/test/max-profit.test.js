var expect = chai.expect;

describe("maxProfit", function() {
  it(`should return 5 if given the array [7, 1, 5, 3, 6, 4]`, function() {
    var arr = [7, 1, 5, 3, 6, 4];

    var result = maxProfit(arr);

    expect(result).to.eql(5);
  });

  it(`should return 8 if given the array [1, 6, 7, 9]`, function() {
    var arr = [1, 6, 7, 9];

    var result = maxProfit(arr);

    expect(result).to.eql(8);
  });

  it(`should return 0 if given the array [9, 7, 4, 1]`, function() {
    var arr = [9, 7, 4, 1];

    var result = maxProfit(arr);

    expect(result).to.eql(0);
  });

  it(`should return 7 if given the array [7, 2, 8, 9]`, function() {
    var arr = [7, 2, 8, 9];

    var result = maxProfit(arr);

    expect(result).to.eql(7);
  });

});
