Test.describe("Basic tests", function() {
  a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  a2 = [
    11 * 11,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19
  ];
  Test.assertEquals(comp(a1, a2), true);
  a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  a2 = [
    11 * 21,
    121 * 121,
    144 * 144,
    19 * 19,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19
  ];
  Test.assertEquals(comp(a1, a2), false);
  a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  a2 = [
    11 * 11,
    121 * 121,
    144 * 144,
    190 * 190,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19
  ];
  Test.assertEquals(comp(a1, a2), false);
  a1 = [];
  a2 = [];
  Test.assertEquals(comp(a1, a2), true);
  a1 = [];
  a2 = null;
  Test.assertEquals(comp(a1, a2), false);
  a1 = [121, 144, 19, 161, 19, 144, 19, 11, 1008];
  a2 = [
    11 * 11,
    121 * 121,
    144 * 144,
    190 * 190,
    161 * 161,
    19 * 19,
    144 * 144,
    19 * 19
  ];
  Test.assertEquals(comp(a1, a2), false);
  a1 = [10000000, 100000000];
  a2 = [10000000 * 10000000, 100000000 * 100000000];
  Test.assertEquals(comp(a1, a2), true);
  a1 = [10000001, 100000000];
  a2 = [10000000 * 10000000, 100000000 * 100000000];
  Test.assertEquals(comp(a1, a2), false);
  a1 = [2, 2, 3];
  a2 = [4, 9, 9];
  Test.assertEquals(comp(a1, a2), false);
  a1 = [2, 2, 3];
  a2 = [4, 4, 9];
  Test.assertEquals(comp(a1, a2), true);
  a1 = [4, 4];
  a2 = [1, 31];
  Test.assertEquals(comp(a1, a2), false);
  a1 = [3, 4];
  a2 = [0, 25];
  Test.assertEquals(comp(a1, a2), false);
  a1 = null;
  a2 = [];
  Test.assertEquals(comp(a1, a2), false);
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function sol(a1, a2) {
    a1 = a1.sort(function(a, b) {
      return b < a;
    });
    a2 = a2.sort(function(a, b) {
      return b < a;
    });
    for (var i in a1) if (Math.pow(a1[i], 2) != a2[i]) return false;
    return true;
  }

  for (var i = 0; i < 40; i++) {
    testlen = randint(1, 8);
    var a1 = [],
      a2 = [];
    for (var j = 0; j < testlen; j++) {
      elem = randint(0, 100);
      a1.push(elem);
      a2.push(elem * elem);
    }
    pos = randint(0, a2.length - 1);
    a2[pos] = a2[pos] + randint(0, 1);
    Test.it(
      "Testing for [" + a1.join(", ") + "] and [" + a2.join(", ") + "]",
      function() {
        Test.assertEquals(
          comp([].concat(a1), [].concat(a2)),
          sol(a1, a2),
          "It should work with random inputs too"
        );
      }
    );
  }
});
