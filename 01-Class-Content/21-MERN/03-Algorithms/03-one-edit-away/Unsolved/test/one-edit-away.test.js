var expect = chai.expect;

describe('oneEditAway', function() {
  it("should return false when passed 'Yoda' and 'Yoda'", function() {
    expect(oneEditAway('Yoda', 'Yoda')).equal(false);
  });

  it("should return true when passed 'Yoda' and 'Yode'", function() {
    expect(oneEditAway('Yoda', 'Yode')).equal(true);
  });

  it("should return true when passed 'yoda' and 'Yoda'", function() {
    expect(oneEditAway('yoda', 'Yoda')).equal(true);
  });

  it("should return true when passed 'Yod' and 'Yoda'", function() {
    expect(oneEditAway('Yod', 'Yoda')).equal(true);
  });

  it("should return true when passed 'Yoda' and 'Yod'", function() {
    expect(oneEditAway('Yoda', 'Yod')).equal(true);
  });
});
