Test.describe("Basic tests", function() {
  Test.assertSimilar(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  Test.assertSimilar(Xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  Test.assertSimilar(Xbonacci([0, 0, 0, 0, 1], 10), [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    4,
    8,
    16
  ]);
  Test.assertSimilar(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10), [
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    6
  ]);
  Test.assertSimilar(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    4,
    8,
    16,
    32,
    64,
    128,
    256
  ]);
  Test.assertSimilar(Xbonacci([0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10), [
    0.5,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  Test.assertSimilar(Xbonacci([0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [
    0.5,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0.5,
    0.5,
    1,
    2,
    4,
    8,
    16,
    32,
    64,
    128
  ]);
  Test.assertSimilar(Xbonacci([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]);
  Test.assertSimilar(Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 9), [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]);
  Test.assertSimilar(Xbonacci([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 0), []);
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function Xsol(s, n) {
    var l = s.length;
    while (s.length < n) {
      s.push(
        s.slice(s.length - l, s.length).reduce(function(a, b) {
          return a + b;
        })
      );
    }
    return s.slice(0, n);
  }

  for (var _ = 0; _ < 40; _++) {
    var sign = [],
      signlen = randint(1, 20);
    for (var j = 0; j < signlen; j++) {
      sign.push(randint(0, 20));
    }
    n = randint(1, 50);
    Test.it(
      "Testing for signature: [" + sign.join(", ") + "] and n: " + n,
      function() {
        Test.assertSimilar(
          Xbonacci([].concat(sign), n),
          Xsol(sign, n),
          "It should work for random inputs too"
        );
      }
    );
  }
});
