var expect = chai.expect;

describe("zeroesAndOnes", function() {
  it(`should return true when given '10101010'`, function() {
    var str = "10101010";

    var result = zeroesAndOnes(str);

    expect(result).to.eql(true);
  });

  it(`should return false when given '00010'`, function() {
    var str = "00010";

    var result = zeroesAndOnes(str);

    expect(result).to.eql(false);
  });

  it(`should return true when given the number
  '001101'`, function() {
    var str = "001101";

    var result = zeroesAndOnes(str);

    expect(result).to.eql(true);
  });

  it(`should return true when given ''`, function() {
    var str = "";

    var result = zeroesAndOnes(str);

    expect(result).to.eql(true);
  });
});
