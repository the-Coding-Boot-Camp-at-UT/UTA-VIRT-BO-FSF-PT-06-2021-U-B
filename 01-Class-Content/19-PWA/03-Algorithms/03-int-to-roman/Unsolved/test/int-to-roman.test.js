var expect = chai.expect;

describe("intToRoman", function() {
  it(`should return "III" if given the number 3`, function() {
    var num = 3;

    var result = intToRoman(num);

    expect(result).to.eql("III");
  });

  it(`should return "IV" if given the number 4`, function() {
    var num = 4;

    var result = intToRoman(num);

    expect(result).to.eql("IV");
  });

  it(`should return "XIII" if given the number 13`, function() {
    var num = 13;

    var result = intToRoman(num);

    expect(result).to.eql("XIII");
  });

  it(`should return "IX" if given the number 9`, function() {
    var num = 9;

    var result = intToRoman(num);

    expect(result).to.eql("IX");
  });

  it(`should return "LVIII" if given the number 58`, function() {
    var num = 58;

    var result = intToRoman(num);

    expect(result).to.eql("LVIII");
  });

  it(`should return "MCMXCIV" if given the number 1994`, function() {
    var num = 1994;

    var result = intToRoman(num);

    expect(result).to.eql("MCMXCIV");
  });

   it(`should return "MDCCXXXVIII" if given the number 1738`, function() {
    var num = 1738;

    var result = intToRoman(num);

    expect(result).to.eql("MDCCXXXVIII");
  });

});
