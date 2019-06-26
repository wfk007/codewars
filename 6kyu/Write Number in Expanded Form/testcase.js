describe("Basic Tests", function() {
  it("Basic Tests", function() {
    Test.assertEquals(expandedForm(2), "2");
    Test.assertEquals(expandedForm(12), "10 + 2");
    Test.assertEquals(expandedForm(42), "40 + 2");
    Test.assertEquals(
      expandedForm(4982342),
      "4000000 + 900000 + 80000 + 2000 + 300 + 40 + 2"
    );
  });
});

describe("Edge Cases", function() {
  it("Zeros", function() {
    Test.assertEquals(
      expandedForm(420370022),
      "400000000 + 20000000 + 300000 + 70000 + 20 + 2"
    );
    Test.assertEquals(expandedForm(70304), "70000 + 300 + 4");
    Test.assertEquals(expandedForm(9000000), "9000000");
  });

  it("Big Numbers", function() {
    Test.assertEquals(
      expandedForm(92093403034573),
      "90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3"
    );
    Test.assertEquals(
      expandedForm(2096039485293),
      "2000000000000 + 90000000000 + 6000000000 + 30000000 + 9000000 + 400000 + 80000 + 5000 + 200 + 90 + 3"
    );
  });
});

function solution(num) {
  var x = -1;
  num = num
    .toString()
    .split("")
    .reverse()
    .map(function(i) {
      x++;
      return i + "0".repeat(x);
    });
  return num
    .filter(i => !/^0+$/.test(i))
    .reverse()
    .join(" + ");
}

describe("Random Tests", function() {
  for (var test = 0; test < 100; test++) {
    var num = Math.floor(Math.random() * 100000000);
    it("Random Test", function() {
      Test.assertEquals(expandedForm(num), solution(num));
    });
  }
});
