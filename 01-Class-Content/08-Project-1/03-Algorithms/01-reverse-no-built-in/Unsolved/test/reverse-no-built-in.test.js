var expect = chai.expect;

describe("reverse", function() {
  it("should return '!dlroW olleH' when given 'Hello World!'", function() {
    var str = "Hello World!";

    var result = reverse(str);

    expect(result).to.eql("!dlroW olleH");
  });

  it("should return '!dlroW eybooG' when given 'Goodbye World!'", function() {
    var str = "Goodbye World!";

    var result = reverse(str);

    expect(result).to.eql("!dlroW eybdooG");
  });
});
