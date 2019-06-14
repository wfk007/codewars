Test.describe("Basic tests", function() {
  Test.assertSimilar(tribonacci([1, 1, 1], 10), [
    1,
    1,
    1,
    3,
    5,
    9,
    17,
    31,
    57,
    105
  ]);
  Test.assertSimilar(tribonacci([0, 0, 1], 10), [
    0,
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24,
    44
  ]);
  Test.assertSimilar(tribonacci([0, 1, 1], 10), [
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24,
    44,
    81
  ]);
  Test.assertSimilar(tribonacci([1, 0, 0], 10), [
    1,
    0,
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24
  ]);
  Test.assertSimilar(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  Test.assertSimilar(tribonacci([1, 2, 3], 10), [
    1,
    2,
    3,
    6,
    11,
    20,
    37,
    68,
    125,
    230
  ]);
  Test.assertSimilar(tribonacci([3, 2, 1], 10), [
    3,
    2,
    1,
    6,
    9,
    16,
    31,
    56,
    103,
    190
  ]);
  Test.assertSimilar(tribonacci([1, 1, 1], 1), [1]);
  Test.assertSimilar(tribonacci([300, 200, 100], 0), []);
  Test.assertSimilar(tribonacci([0.5, 0.5, 0.5], 30), [
    0.5,
    0.5,
    0.5,
    1.5,
    2.5,
    4.5,
    8.5,
    15.5,
    28.5,
    52.5,
    96.5,
    177.5,
    326.5,
    600.5,
    1104.5,
    2031.5,
    3736.5,
    6872.5,
    12640.5,
    23249.5,
    42762.5,
    78652.5,
    144664.5,
    266079.5,
    489396.5,
    900140.5,
    1655616.5,
    3045153.5,
    5600910.5,
    10301680.5
  ]);
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  function soluzionacci(sign, n) {
    while (sign.length < n) {
      sign.push(
        sign[sign.length - 3] + sign[sign.length - 2] + sign[sign.length - 1]
      );
    }
    return sign.slice(0, n);
  }

  for (var _ = 0; _ < 40; _++) {
    sign = [randint(0, 20), randint(0, 20), randint(0, 20)];
    n = randint(0, 50);
    Test.it(
      "Testing for signature: [" + sign.join(", ") + "] and n: " + n,
      function() {
        Test.assertSimilar(
          tribonacci([].concat(sign), n),
          soluzionacci(sign, n),
          "It should work with random inputs too"
        );
      }
    );
  }
});
