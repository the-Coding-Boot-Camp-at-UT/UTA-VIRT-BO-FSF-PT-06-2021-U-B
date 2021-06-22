var expect = chai.expect;

describe("vowelCount", function() {
  it('should return the number 3 when given the string "programmer"', function() {
    var str = "programmer";

    var result = vowelCount(str);

    expect(result).to.eql(3);
  });

  it('should return the number 8 when given the string "I think, therefore I am."', function() {
    var str = "I think, therefore I am.";

    var result = vowelCount(str);

    expect(result).to.eql(8);
  });

  it("should return the number 0 when given an empty string.", function() {
    var str = "";

    var result = vowelCount(str);

    expect(result).to.eql(0);
  });
});
