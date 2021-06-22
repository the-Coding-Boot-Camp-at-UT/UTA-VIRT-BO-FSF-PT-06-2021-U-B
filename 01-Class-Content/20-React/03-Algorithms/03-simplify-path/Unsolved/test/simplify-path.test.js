var expect = chai.expect;

describe("simplifyPath", function() {
  it(`should return "/home" if given the string "/home/"`, function() {
    var path = "/home/";

    var result = simplifyPath(path);

    expect(result).to.eql("/home");
  });

  it(`should return "/" if given the string "/../"`, function() {
    var path = "/../";

    var result = simplifyPath(path);

    expect(result).to.eql("/");
  });

  it(`should return "/c" if given the string "/a/./b/../../c/"`, function() {
    var path = "/a/./b/../../c/";

    var result = simplifyPath(path);

    expect(result).to.eql("/c");
  });

  it(`should return "/c" if given the string "/a/../../b/../c//.//"`, function() {
    var path = "/a/../../b/../c//.//";

    var result = simplifyPath(path);

    expect(result).to.eql("/c");
  });

  it(`should return "/c" if given the string "/a//b////c/d//././/.."`, function() {
    var path = "/a//b////c/d//././/..";

    var result = simplifyPath(path);

    expect(result).to.eql("/a/b/c");
  });

});
