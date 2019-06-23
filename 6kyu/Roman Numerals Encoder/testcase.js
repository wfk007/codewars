describe("solution", () => {
  it("should handle small numbers", () => {
    Test.assertEquals(solution(1), "I", '1 should, "I"');
    Test.assertEquals(solution(2), "II", '2 should, "II"');
    Test.assertEquals(solution(3), "III", '3 should, "III"');
    Test.assertEquals(solution(4), "IV", '4 should, "IV"');
    Test.assertEquals(solution(5), "V", '5 should, "V"');
    Test.assertEquals(solution(9), "IX", '9 should, "IX"');
    Test.assertEquals(solution(10), "X", '10 should, "X"');
    Test.assertEquals(solution(11), "XI");
    Test.assertEquals(solution(19), "XIX");
    Test.assertEquals(solution(22), "XXII");
    Test.assertEquals(solution(15), "XV");
  });

  it("should handle large numbers", () => {
    Test.assertEquals(solution(1000), "M", '1000 should, "M"');
    Test.assertEquals(solution(1001), "MI", '1001 should, "MI"');
    Test.assertEquals(solution(1990), "MCMXC", '1990 should, "MCMXC"');
    Test.assertEquals(solution(2007), "MMVII", '2007 should, "MMVII"');
    Test.assertEquals(solution(2008), "MMVIII", '2008 should, "MMVIII"');
  });

  it("random tests", () => {
    var Roman = {
      map: [
        1000,
        "M",
        900,
        "CM",
        500,
        "D",
        400,
        "CD",
        100,
        "C",
        90,
        "XC",
        50,
        "L",
        40,
        "XL",
        10,
        "X",
        9,
        "IX",
        5,
        "V",
        4,
        "IV",
        1,
        "I"
      ],
      toRoman: function(n) {
        var value = "";
        for (var idx = 0; n > 0 && idx < this.map.length; idx += 2) {
          while (n >= this.map[idx]) {
            value += this.map[idx + 1];
            n -= this.map[idx];
          }
        }
        return value;
      }
    };

    for (let i = 0; i < 100; i++) {
      var n = (1 + Math.random() * 3888) | 0;
      Test.assertEquals(solution(n), Roman.toRoman(n));
    }
  });
});
