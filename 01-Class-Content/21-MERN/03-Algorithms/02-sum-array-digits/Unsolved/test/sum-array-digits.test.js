var expect = chai.expect;

describe("sumArrayDigits", function() {
  it(`should return [6, 9] if given the arrays [2, 2] and [4, 7]`, function() {
    var arr1 = [2, 2];
    var arr2 = [4, 7];

    var result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([6, 9]);
  });

  it(`should return [8, 4] if given the arrays [2, 7] and [5, 7]`, function() {
    var arr1 = [2, 7];
    var arr2 = [5, 7];

    var result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([8, 4]);
  });

  it(`should return [3, 3, 3] if given the arrays [2, 9, 9] and [3, 4]`, function() {
    var arr1 = [2, 9, 9];
    var arr2 = [3, 4];

    var result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([3, 3, 3]);
  });

  it(`should return [1, 0, 0, 0] if given the arrays [1] and [9, 9, 9]`, function() {
    var arr1 = [1];
    var arr2 = [9, 9, 9];

    var result = sumArrayDigits(arr1, arr2);

    expect(result).to.eql([1, 0, 0, 0]);
  });

});
