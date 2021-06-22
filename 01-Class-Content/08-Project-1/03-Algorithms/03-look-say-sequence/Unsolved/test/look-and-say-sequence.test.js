var expect = chai.expect;

describe("lookAndSaySequence", function() {
  it("should return '2114331827' when given '114333877'", function() {
    var n = 114333877;

    var result = lookAndSay(n);

    expect(result).to.eql(2114331827);
  });

  it("should return '10' when given '0'", function() {
    var n = 0;

    var result = lookAndSay(n);

    expect(result).to.eql(10);
  });

  it("should return '1921321713' when given '91122273'", function() {
    var n = 91122273;

    var result = lookAndSay(n);

    expect(result).to.eql(1921321713);
  });
});
