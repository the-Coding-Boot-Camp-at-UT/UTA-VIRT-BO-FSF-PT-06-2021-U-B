var expect = chai.expect;

describe("longestWord", function() {
  it("should return 'Jumped' when given 'The Quick Brown Fox Jumped Over The Lazy Dog'", function() {
    var str = "The Quick Brown Fox Jumped Over The Lazy Dog";

    var result = longestWord(str);

    expect(result).to.eql("Jumped");
  });

  it("should return 'Remembers' when given 'The North Remembers'", function() {
    var str = "The North Remembers";

    var result = longestWord(str);

    expect(result).to.eql("Remembers");
  });
});
