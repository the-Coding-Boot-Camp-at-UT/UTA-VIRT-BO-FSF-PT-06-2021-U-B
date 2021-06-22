var expect = chai.expect;

describe("stringMap", function() {
  it(`should return {"h":[0],"e":[1],"l":[2, 3, 9],"o":[4, 7]," ":[5],"w":[6],"r":[8],"d":[10]} when given the string "hello world"`, function() {
    var str = "hello world";

    var result = stringMap(str);

    expect(result).to.eql({
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      " ": [5],
      w: [6],
      r: [8],
      d: [10]
    });
  });

  it(`should return {"J":[0],"a":[1, 3],"v":[2],"S":[4],"c":[5, 13],"r":[6, 11],"i":[7],"p":[8],"t":[9]," ":[10],"o":[12],"k":[14],"s":[15],"!":[16]} when given the string "JavaScript rocks!"`, function() {
    var str = "JavaScript rocks!";

    var result = stringMap(str);

    expect(result).to.eql({
      J: [0],
      a: [1, 3],
      v: [2],
      S: [4],
      c: [5, 13],
      r: [6, 11],
      i: [7],
      p: [8],
      t: [9],
      " ": [10],
      o: [12],
      k: [14],
      s: [15],
      "!": [16]
    });
  });

  it(`should return "{"g":[0],"o":[1, 2, 9],"d":[3, 12],"b":[4],"y":[5],"e":[6]," ":[7],"w":[8],"r":[10],"l":[11],"!":[13]}" when given the string "goodbye world!"`, function() {
    var str = "goodbye world!";

    var result = stringMap(str);

    expect(result).to.eql({
      g: [0],
      o: [1, 2, 9],
      d: [3, 12],
      b: [4],
      y: [5],
      e: [6],
      " ": [7],
      w: [8],
      r: [10],
      l: [11],
      "!": [13]
    });
  });
});
