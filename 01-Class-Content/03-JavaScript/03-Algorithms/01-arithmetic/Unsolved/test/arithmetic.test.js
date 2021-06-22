var expect = chai.expect;

describe("add", function() {
  it("should add two numbers", function() {
    var num1 = 10;
    var num2 = 24;

    var result = add(num1, num2);

    expect(result).to.eql(34);
  });
});

describe("subtract", function() {
  it("should subtract the second number from the first number", function() {
    var num1 = 100;
    var num2 = 91;

    var result = subtract(num1, num2);

    expect(result).to.eql(9);
  });
});

describe("multiply", function() {
  it("should multiply the two numbers", function() {
    var num1 = 7;
    var num2 = 70;

    var result = multiply(num1, num2);

    expect(result).to.eql(490);
  });
});

describe("divide", function() {
  it("should divide the first number by the second number", function() {
    var num1 = 33;
    var num2 = 11;

    var result = divide(num1, num2);

    expect(result).to.eql(3);
  });
});
