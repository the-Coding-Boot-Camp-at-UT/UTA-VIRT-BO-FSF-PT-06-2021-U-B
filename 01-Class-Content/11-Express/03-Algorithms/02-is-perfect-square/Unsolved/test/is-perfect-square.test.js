var expect = chai.expect;

describe("isPerfectSquare", function() {
  it(`should return true when given the number
  9`, function() {
    var num = 9;

    var result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  16`, function() {
    var num = 16;

    var result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  81`, function() {
    var num = 81;

    var result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  1`, function() {
    var num = 1;

    var result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return true when given the number
  0`, function() {
    var num = 0;

    var result = isPerfectSquare(num);

    expect(result).to.eql(true);
  });

  it(`should return false when given the number
  7`, function() {
    var num = 7;

    var result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  15`, function() {
    var num = 15;

    var result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  14`, function() {
    var num = 14;

    var result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  -9`, function() {
    var num = -9;

    var result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });

  it(`should return false when given the number
  66`, function() {
    var num = 66;

    var result = isPerfectSquare(num);

    expect(result).to.eql(false);
  });
});
