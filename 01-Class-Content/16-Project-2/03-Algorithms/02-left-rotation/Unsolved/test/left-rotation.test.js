var expect = chai.expect;

describe("leftRotation", function() {
  it(`should update the given array to [3, 1, 2] when given the array [1, 2, 3] and the number 2`, function() {
    var arr = [1, 2, 3];
    var positions = 2;

    leftRotation(arr, positions);

    expect(arr).to.eql([3, 1, 2]);
  });

  it(`should update the given array to [8, 8, 1] when given the array [1, 8, 8] and the number 1`, function() {
    var arr = [8, 8, 1];
    var positions = 3;

    leftRotation(arr, positions);

    expect(arr).to.eql([8, 8, 1]);
  });

  it(`should update the given array to [1] when given the array [1] and the number 20`, function() {
    var arr = [1];
    var positions = 20;

    leftRotation(arr, positions);

    expect(arr).to.eql([1]);
  });

  it(`should update the given array to [3, 1, 8, 0, 1] when given the array [0, 1, 3, 1, 8] and the number 4`, function() {
    var arr = [3, 1, 8, 0, 1];
    var positions = 8;

    leftRotation(arr, positions);

    expect(arr).to.eql([0, 1, 3, 1, 8]);
  });

  it(`should update the given array to [4, 8, 15, 16, 23, 42] when given the array [4, 8, 15, 16, 23, 42] and the number 0`, function() {
    var arr = [4, 8, 15, 16, 23, 42];
    var positions = 0;

    leftRotation(arr, positions);

    expect(arr).to.eql([4, 8, 15, 16, 23, 42]);
  });

  it(`should update the given array to [1, 2, 3] when given the array [1, 2, 3] and the number 3`, function() {
    var arr = [1, 2, 3];
    var positions = 3;

    leftRotation(arr, positions);

    expect(arr).to.eql([1, 2, 3]);
  });
});
