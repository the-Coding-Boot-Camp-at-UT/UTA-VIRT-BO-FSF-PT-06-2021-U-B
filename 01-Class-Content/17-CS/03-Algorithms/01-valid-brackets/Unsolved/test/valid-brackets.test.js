var expect = chai.expect;

describe("validBrackets", function() {
  it(`should return true if given the string "( )"`, function() {
    var str = "( )";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "[ ( ) ]"`, function() {
    var str = "[ ( ) ]";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "{ } [ ( [] ) ]"`, function() {
    var str = "{ } [ ( ) ]";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return true if given the string "( )[ ]{ }"`, function() {
    var str = "( )[ ]{ }";

    var result = validBrackets(str);

    expect(result).to.eql(true);
  });

  it(`should return false if given the string "( ]"`, function() {
    var str = "( ]";

    var result = validBrackets(str);

    expect(result).to.eql(false);
  });

  it(`should return false if given the string "( [ ) ]"`, function() {
    var str = "( [ ) ]";

    var result = validBrackets(str);

    expect(result).to.eql(false);
  });

});
