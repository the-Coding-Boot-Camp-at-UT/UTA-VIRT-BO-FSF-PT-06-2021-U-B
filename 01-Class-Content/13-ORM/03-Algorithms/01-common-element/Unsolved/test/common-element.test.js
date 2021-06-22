var expect = chai.expect;

describe("commonElement", function() {
  it(`should return 4 when given [5, 3, 4, 10] and [0, 4, 9, 99]`, function() {
    var arrA = [0, 4, 9, 99];
    var arrB = [5, 3, 4, 10];

    var result = commonElement(arrA, arrB);

    expect(result).to.eql(4);
  });

  it(`should return 0 when given [82, 43, 17, 0, -81] and [1, 0, -1, -2, -10]`, function() {
    var arrA = [82, 43, 17, 0, -81];
    var arrB = [1, 0, -1, -2, -10];

    var result = commonElement(arrA, arrB);

    expect(result).to.eql(0);
  });

  it(`should return 8 when given [10, 8, 6, 4, 2] and [8, 80, 800, 8000, 80000]`, function() {
    var arrA = [10, 8, 6, 4, 2];
    var arrB = [8, 80, 800, 8000, 80000];

    var result = commonElement(arrA, arrB);

    expect(result).to.eql(8);
  });
});
