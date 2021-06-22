var expect = chai.expect;

function containSameElements(arr1, arr2) {
  var arr1Copy = JSON.parse(JSON.stringify(arr1));

  for (var i = 0; i < arr2.length; i++) {
    var num = arr2[i];

    var arr1Index = arr1Copy.indexOf(num);

    if (arr1Index === -1 || arr1Copy.length === 0) {
      return false;
    }

    arr1Copy.splice(arr1Index, 1);
  }

  return true;
}

describe("arrayIntersection", function() {
  it(`should return [1, 3, 5] when given [1, 2, 3, 4, 5] and [5, 0, 3, 10, -2, 1]`, function() {
    var arr1 = [1, 2, 3, 4, 5];
    var arr2 = [5, 0, 3, 10, -2, 1];

    var result = arrayIntersection(arr1, arr2);
    var expected = [1, 3, 5];

    var areEqual = containSameElements(result, expected);
    
    expect(areEqual).to.eql(true);
  });

  it(`should return [7, 13, 13, 13] when given [13, 12, 13, 14, 13, -9, 7] and [11, 7, 13, -19, 13, 111, 13]`, function() {
    var arr1 = [13, 12, 13, 14, 13, -9, 7];
    var arr2 = [11, 7, 13, -19, 13, 111, 13];

    var result = arrayIntersection(arr1, arr2);
    var expected = [7, 13, 13, 13];

    var areEqual = containSameElements(result, expected);
    
    expect(areEqual).to.eql(true);
  });

  it(`should return [] when given [99, 88, 77, 66] and [55, 44, 33, 22, 11]`, function() {
    var arr1 = [99, 88, 77, 66];
    var arr2 = [55, 44, 33, 22, 11];

    var result = arrayIntersection(arr1, arr2);
    var expected = [];
    
    expect(result).to.eql(expected);
  });
});
