var expect = chai.expect;

describe("mergeSorted", function () {
  it(`should return [1, 2, 3, 4] when given [1, 3] and [2, 4]`, function () {
    var arr1 = [1, 3];
    var arr2 = [2, 4];

    var result = mergeSorted(arr1, arr2);

    expect(result).to.eql([1, 2, 3, 4]);
  });

  it(`should return [3, 4, 8, 10, 13] when given [3, 4, 8, 10, 13] and []`, function () {
    var arr1 = [3, 4, 8, 10, 13];
    var arr2 = [];

    var result = mergeSorted(arr1, arr2);

    expect(result).to.eql([3, 4, 8, 10, 13]);
  });

  it(`should return [8, 12, 13, 14, 20, 40, 41, 43, 50, 51] when given [12, 13, 20, 51] and [8, 14, 40, 41, 43, 50]`, function () {
    var arr1 = [12, 13, 20, 51];
    var arr2 = [8, 14, 40, 41, 43, 50];

    var result = mergeSorted(arr1, arr2);

    expect(result).to.eql([8, 12, 13, 14, 20, 40, 41, 43, 50, 51]);
  });
});
