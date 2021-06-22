var expect = chai.expect;

describe("rotationPoint", function() {
  it(`should return 1 if given the array ['cool', 'cat']`, function() {
    var words = ["cool", "cat"];

    var result = rotationPoint(words);

    expect(result).to.eql(1);
  });

  it(`should return 4 if given the array ['great', 'ostrich', 'panther', 'ruby', 'chosen', 'feathers']`, function() {
    var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];

    var result = rotationPoint(words);

    expect(result).to.eql(4);
  });

  it(`should return 5 if given the array ['problem', 'reactive', 'supper',
  'undesirable', 'xebra', 'alpha',
  'bank', 'banned', 'endanger',
  'fallout', 'yellow']`, function() {
    var words = [
      "problem",
      "reactive",
      "supper",
      "undesirable",
      "xebra",
      "alpha",
      "bank",
      "banned",
      "endanger",
      "fallout",
      "yellow"
    ];

    var result = rotationPoint(words);

    expect(result).to.eql(5);
  });

  it(`should return -1 if given the array ['any', 'body', 'can', 'dance', 'to', 'violas']`, function() {
    var words = ["any", "body", "can", "dance", "to", "violas"];

    var result = rotationPoint(words);

    expect(result).to.eql(-1);
  });
});
