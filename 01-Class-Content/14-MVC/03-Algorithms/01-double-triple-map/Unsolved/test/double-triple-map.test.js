var expect = chai.expect;

describe("doubleTripleMap", function() {
  it(`should return [3, 4, 9, 8] when given [1, 2, 3, 4]`, function() {
    var arr = [1, 2, 3, 4];

    var result = doubleTripleMap(arr);

    expect(result).to.eql([3, 4, 9, 8]);
  });

  it(`should return [8, 16, 45, 32, 69, 84] when given [4, 8, 15, 16, 23, 42]`, function() {
    var arr = [4, 8, 15, 16, 23, 42];

    var result = doubleTripleMap(arr);

    expect(result).to.eql([8, 16, 45, 32, 69, 84]);
  });

  it(`should return [-9, 9, -8, 0, -21, 27] when given the number
  [-3, 3, -4, 0, -7, 9]`, function() {
    var arr = [-3, 3, -4, 0, -7, 9];

    var result = doubleTripleMap(arr);

    expect(result).to.eql([-9, 9, -8, 0, -21, 27]);
  });

  it(`should return [] when given []`, function() {
    var arr = [];

    var result = doubleTripleMap(arr);

    expect(result).to.eql([]);
  });
});
