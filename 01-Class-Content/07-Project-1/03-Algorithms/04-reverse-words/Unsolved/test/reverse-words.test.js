var expect = chai.expect;

describe("reverseWords", function() {
  it("should reverse the words in a given string", function() {
    var str = "it does not matter how slowly you go as long as you do not stop";

    var result = reverseWords(str);

    expect(result).to.eql(
      "stop not do you as long as go you slowly how matter not does it"
    );
  });
});
