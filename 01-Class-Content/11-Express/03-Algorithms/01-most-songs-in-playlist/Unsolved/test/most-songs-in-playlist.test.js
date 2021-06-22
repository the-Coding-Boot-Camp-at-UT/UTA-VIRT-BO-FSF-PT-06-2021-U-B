var expect = chai.expect;

describe("mostSongsInPlaylist", function() {
  it("should return 19 when given the array [3, 5, 7, 2, 1, 4, 8, 5, 3, 2, 2, 1, 5, 7, 4, 2, 3, 1, 3, 4, 7, 8, 8, 2]", function() {
    var arr = [
      3,
      5,
      7,
      2,
      1,
      4,
      8,
      5,
      3,
      2,
      2,
      1,
      5,
      7,
      4,
      2,
      3,
      1,
      3,
      4,
      7,
      8,
      8,
      2
    ];

    var result = mostSongsInPlaylist(arr);

    expect(result).to.eql(19);
  });

  it("should return 7 when given the array [3, 4, 2, 1, 7, 5, 3]", function() {
    var arr = [3, 4, 2, 1, 7, 5, 3];

    var result = mostSongsInPlaylist(arr);

    expect(result).to.eql(7);
  });

  it("should return 0 when given the array []", function() {
    var arr = [];

    var result = mostSongsInPlaylist(arr);

    expect(result).to.eql(0);
  });
});
