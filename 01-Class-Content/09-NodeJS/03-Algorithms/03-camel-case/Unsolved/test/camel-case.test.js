var expect = chai.expect;

describe("camelCase", function() {
  it("should return 'helloWorld' when given 'Hello World'", function() {
    var str = "Hello World";

    var result = camelCase(str);

    expect(result).to.eql("helloWorld");
  });

  it("should return 'theRainInSpainFallsMainlyOnThePlain' when given 'The rain in spain falls mainly on the plain'", function() {
    var str = "The rain in spain falls mainly on the plain";

    var result = camelCase(str);

    expect(result).to.eql("theRainInSpainFallsMainlyOnThePlain");
  });
});
