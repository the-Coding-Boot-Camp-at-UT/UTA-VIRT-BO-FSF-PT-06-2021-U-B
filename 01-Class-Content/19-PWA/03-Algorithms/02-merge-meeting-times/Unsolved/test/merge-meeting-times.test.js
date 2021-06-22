var expect = chai.expect;

describe("mergeMeetingTimes", function() {
  it(`should return [[ 1, 4 ]] if given the array [[ 1, 3 ], [ 2, 4 ]]`, function() {
    var arr = [[1, 3], [2, 4]];

    var result = mergeMeetingTimes(arr);

    expect(result).to.eql([[1, 4]]);
  });

  it(`should return [[ 5, 8 ]] if given the array [[ 5, 6 ], [ 6, 8 ]]`, function() {
    var arr = [[5, 6], [6, 8]];

    var result = mergeMeetingTimes(arr);

    expect(result).to.eql([[5, 8]]);
  });

  it(`should return [[ 1, 8 ]] if given the array [[ 1, 8 ], [ 2, 5 ]]`, function() {
    var arr = [[1, 8], [2, 5]];

    var result = mergeMeetingTimes(arr);

    expect(result).to.eql([[1, 8]]);
  });

  it(`should return [[1, 4], [5, 8]] if given the array [
    [ 5, 8 ],
    [ 1, 4 ],
    [ 6, 8 ]
  ]`, function() {
    var arr = [[5, 8], [1, 4], [6, 8]];

    var result = mergeMeetingTimes(arr);

    expect(result).to.eql([[1, 4], [5, 8]]);
  });

  it(`should return [[ 1, 12 ]] if given the array [
    [ 1, 10 ],
    [ 2, 5 ],
    [ 6, 8 ],
    [ 9, 10 ],
    [ 10, 12 ]
  ]`, function() {
    var arr = [[1, 10], [2, 5], [6, 8], [9, 10], [10, 12]];

    var result = mergeMeetingTimes(arr);

    expect(result).to.eql([[1, 12]]);
  });
});
