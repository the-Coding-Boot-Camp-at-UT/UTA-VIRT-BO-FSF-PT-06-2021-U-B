var expect = chai.expect;

describe("romanToInt", function() {
  it(`should return 3 if given the string "III"`, function() {
    var str = "III";

    var result = romanToInt(str);

    expect(result).to.eql(3);
  });

  it(`should return 4 if given the string "IV"`, function() {
    var str = "IV";

    var result = romanToInt(str);

    expect(result).to.eql(4);
  });

  it(`should return 13 "XIII" if given the string "XIII"`, function() {
    var str = "XIII";

    var result = romanToInt(str);

    expect(result).to.eql(13);
  });

  it(`should return 9 if given the string "IX"`, function() {
    var str = "IX";

    var result = romanToInt(str);

    expect(result).to.eql(9);
  });

  it(`should return 58 if given the string "LVIII"`, function() {
    var str = "LVIII";

    var result = romanToInt(str);

    expect(result).to.eql(58);
  });

  it(`should return 1994 if given the string "MCMXCIV"`, function() {
    var str = "MCMXCIV";

    var result = romanToInt(str);

    expect(result).to.eql(1994);
  });

   it(`should return 1738 if given the string "MDCCXXXVIII"`, function() {
    var str = "MDCCXXXVIII";

    var result = romanToInt(str);

    expect(result).to.eql(1738);
  });

});
