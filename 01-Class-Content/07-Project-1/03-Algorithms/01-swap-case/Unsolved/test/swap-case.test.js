var expect = chai.expect;

describe("swapCase", function() {
  it("should return `tHE pRICE `OF gREATNESS iS rESPONSIBILITY` when given `The Price of Greatness Is Responsibility`", function() {
    var str = "The Price of Greatness Is Responsibility";

    var result = swapCase(str);

    expect(result).to.eql("tHE pRICE OF gREATNESS iS rESPONSIBILITY");
  });

  it("should return `iMaGiNe iF I wRoTe lIkE ThIs` when given `ImAgInE If i WrOtE LiKe tHiS`", function() {
    var str = "ImAgInE If i WrOtE LiKe tHiS";

    var result = swapCase(str);

    expect(result).to.eql("iMaGiNe iF I wRoTe lIkE ThIs");
  });
});
