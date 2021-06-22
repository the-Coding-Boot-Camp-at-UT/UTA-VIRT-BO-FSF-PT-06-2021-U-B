var expect = chai.expect;

describe("acronymBuilder", function() {
  it("should return 'ABC' when given the 'always be coding'", function() {
    var str = "always be coding";

    var result = acronymBuilder(str);

    expect(result).to.eql("ABC");
  });

  it("should return 'DGS' when given the 'don't get stuck", function() {
    var str = "don't get stuck";

    var result = acronymBuilder(str);

    expect(result).to.eql("DGS");
  });
});
