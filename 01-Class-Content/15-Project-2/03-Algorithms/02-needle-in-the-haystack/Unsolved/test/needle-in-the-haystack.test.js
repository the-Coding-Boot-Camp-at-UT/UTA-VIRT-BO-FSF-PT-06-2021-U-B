var expect = chai.expect;

before(function() {
  sinon.spy(Array.prototype, "indexOf");
});

describe("strStr", function() {
  it(`should return 2 when given the strings "Hello" and "ll"`, function() {
    var str1 = "Hello";
    var str2 = "ll";

    var result = strStr(str1, str2);
  
    expect(result).to.eql(2);
  });

  it(`should return -1 when given the strings "aaaaaa" and "bba"`, function() {
    var str1 = "aaaaaa";
    var str2 = "bba";

    var result = strStr(str1, str2);
    
    expect(result).to.eql(-1);
  });

  it(`should return 0 when given "Hello World" and ""`, function() {
    var str1 = "Hello World";
    var str2 = "";

    var result = strStr(str1, str2);
    
    expect(result).to.eql(0);
  });
});
