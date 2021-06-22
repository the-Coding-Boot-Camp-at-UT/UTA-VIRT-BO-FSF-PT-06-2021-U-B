var expect = chai.expect;

describe("arraySearch2D", function() {
  it(`should return 3 when given the array
  [["O", "O", "O"]
  ["X", "O", "O"],
  ["O", "O", "X"],
  ["O", "O", "X"]]`, function() {
    var arr = [
      ["O", "O", "O"],
      ["X", "O", "O"],
      ["O", "O", "X"],
      ["O", "O", "X"]
    ];

    var result = arraySearch2D(arr);

    expect(result).to.eql(3);
  });

  it(`should return 0 when given the array
  [["O", "O", "O"],
  ["O", "O", "O"]]`, function() {
    var arr = [["O", "O", "O"], ["O", "O", "O"]];

    var result = arraySearch2D(arr);

    expect(result).to.eql(0);
  });

  it(`should return 5 when given the array
  [["X", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["X", "X", "X", "X"],
  ["O", "O", "O", "O"]]`, function() {
    var arr = [
      ["X", "O", "O", "O"],
      ["O", "O", "O", "O"],
      ["X", "X", "X", "X"],
      ["O", "O", "O", "O"]
    ];

    var result = arraySearch2D(arr);

    expect(result).to.eql(5);
  });

  it(`should return 0 when given the array
  [[]]`, function() {
    var arr = [[]];

    var result = arraySearch2D(arr);

    expect(result).to.eql(0);
  });
});
