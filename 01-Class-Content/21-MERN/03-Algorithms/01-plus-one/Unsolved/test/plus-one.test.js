var expect = chai.expect;

describe("plusOne", function() {
  it(`should return [1, 2, 4] if given the array [1, 2, 3]`, function() {
    var digits = [1, 2, 3];

    var result = plusOne(digits);

    expect(result, "Modify and return the same array").to.equal(digits);
    expect(result).to.eql([1, 2, 4]);
  });

  it(`should return [1] if given the array []`, function() {
    var digits = [];

    var result = plusOne(digits);

    expect(result, "Modify and return the same array").to.equal(digits);
    expect(result).to.eql([1]);
  });

  it(`should return [1, 0, 0] if given the array [9, 9]`, function() {
    var digits = [9, 9];

    var result = plusOne(digits);

    expect(result, "Modify and return the same array").to.equal(digits);
    expect(result).to.eql([1, 0, 0]);
  });

  it(`should return [7, 8, 7, 0] if given the array [7, 8, 6, 9]`, function() {
    var digits = [7, 8, 6, 9];

    var result = plusOne(digits);

    expect(result, "Modify and return the same array").to.equal(digits);
    expect(result).to.eql([7, 8, 7, 0]);
  });
});
