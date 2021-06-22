var expect = chai.expect;

describe("isNumeric", function() {
  it("should return true given the string '1234'", function() {
    var str = "1234";

    var result = isNumeric(str);

    expect(result).to.eql(true);
  });

  it("should return true given the string '-23'", function() {
    var str = "-23";

    var result = isNumeric(str);

    expect(result).to.eql(true);
  });

  it("should return true given the string '.48'", function() {
    var str = ".48";

    var result = isNumeric(str);

    expect(result).to.eql(true);
  });

  it("should return true given the string '048.00'", function() {
    var str = "048.00";

    var result = isNumeric(str);

    expect(result).to.eql(true);
  });

  it("should return true given the string '+44'", function() {
    var str = "+44";

    var result = isNumeric(str);

    expect(result).to.eql(true);
  });

  it("should return false given the string '.+99'", function() {
    var str = ".+99";

    var result = isNumeric(str);

    expect(result).to.eql(false);
  });

  it("should return false given the string '-+1'", function() {
    var str = "-+1";

    var result = isNumeric(str);

    expect(result).to.eql(false);
  });

  it("should return false given the string '-.'", function() {
    var str = "-.";

    var result = isNumeric(str);

    expect(result).to.eql(false);
  });

  it("should return false given the string '55-'", function() {
    var str = "55-";

    var result = isNumeric(str);

    expect(result).to.eql(false);
  });

  it("should return false given the string '1.1.1'", function() {
    var str = "1.1.1";

    var result = isNumeric(str);

    expect(result).to.eql(false);
  });

  it("should return false given an empty string", function() {
    var str = "";

    var result = isNumeric(str);

    expect(result).to.eql(false);
  });

  it("should return false given the string 'a3", function() {
    var str = "a3";

    var result = isNumeric(str);

    expect(result).to.eql(false);
  });
});
