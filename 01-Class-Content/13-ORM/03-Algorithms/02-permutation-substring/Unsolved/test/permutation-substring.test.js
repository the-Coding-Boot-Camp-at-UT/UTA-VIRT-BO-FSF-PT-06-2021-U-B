var expect = chai.expect;

describe("permutationSubstring", function() {
  it(`should return true if given the strings "tbacowa" and "bat"`, function() {
    var str = "tbacowa";
    var sub = "bat";

    var result = permutationSubstring(str, sub);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "nAtsuiPlwuan" and "Austin"`, function() {
    var str = "nAtsuiPlwuan";
    var sub = "Austin";

    var result = permutationSubstring(str, sub);

    expect(result).to.eql(true);
  });

  it(`should return false if given the strings "nnhsuieaero" and "summer"`, function() {
    var str = "nnhsuieaero";
    var sub = "summer";

    var result = permutationSubstring(str, sub);

    expect(result).to.eql(false);
  });

  it(`should return false if given the strings "octmantisplantic" and "atlantic ocean"`, function() {
    var str = "octmantisplantic";
    var sub = "atlantic ocean";

    var result = permutationSubstring(str, sub);

    expect(result).to.eql(false);
  });
});
