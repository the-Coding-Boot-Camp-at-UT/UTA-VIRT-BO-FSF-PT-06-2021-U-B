const expect = chai.expect;

describe("maxSumArray", function() {
  it(`should return 1 if given the array [1]`, function() {
    let arr1 = [1];
    let result = maxSumArray(arr1);

    expect(result).to.eql(1);
  });

  it(`should return 1 if given the array [-1,2]`, function() {
    let arr1 = [-1,2]
    let result = maxSumArray(arr1);
    expect(result).to.eql(1);
  });

  it(`should return 10 if given the array [1,2,3,4]`, function() {
    let arr1 = [1, 2, 3, 4]
    let result = maxSumArray(arr1);
    expect(result).to.eql(10);
  });

  it(`should return 10 if given the array [1,2,-50,4,5]`, function() {
    let arr1 = [1, 2, -50, 4, 5]
    let result = maxSumArray(arr1);
    expect(result).to.eql(9);
  });

  it(`should return 6 if given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4]`, function() {
    let arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    let result = maxSumArray(arr1);
    expect(result).to.eql(6);
  });

});

