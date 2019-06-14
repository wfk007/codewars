Test.describe("Simple tests", _ => {
  Test.assertEquals(findOutlier([0, 1, 2]), 1);
  Test.assertEquals(findOutlier([1, 2, 3]), 2);
  Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3);
  Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3);
  Test.assertEquals(findOutlier([1, 1, 0, 1, 1]), 0);
});

Test.describe("More complex tests", _ => {
  ints1 = [2, 6, 8, 10, 3];
  ints2 = [2, 6, 8, 200, 700, 1, 84, 10, 4];
  ints3 = [17, 6, 8, 10, 6, 12, 24, 36];
  ints4 = [2, 1, 7, 17, 19, 211, 7];
  ints5 = [1, 1, 1, 1, 1, 44, 7, 7, 7, 7, 7, 7, 7, 7];
  ints6 = [
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    35,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    7,
    7,
    7,
    7,
    1000
  ];
  ints7 = [2, -6, 8, -10, -3];
  ints8 = [2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4];
  ints9 = [-100000000007, -18, 6, -8, -10, 6, 12, -24, 36];
  ints10 = [-20, 1, 7, 17, 19, 211, 7];
  ints11 = [1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7];
  ints12 = [1, 0, 0];
  ints13 = [3, 7, -99, 81, 90211, 0, 7];

  inputs = [
    ints1,
    ints2,
    ints3,
    ints4,
    ints5,
    ints6,
    ints7,
    ints8,
    ints9,
    ints10,
    ints11,
    ints12,
    ints13
  ];
  expected = [3, 1, 17, 2, 44, 1000, -3, -35, -100000000007, -20, -44, 1, 0];

  for (var i = 0; i < inputs.length; i++) {
    Test.assertEquals(findOutlier(inputs[i]), expected[i]);
  }
});

Test.describe("Random tests", _ => {
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);

  for (var i = 0; i < 30; i++) {
    var test_integers = [],
      len = randint(3, 50),
      base = 100000000,
      k = randint(0, 1);
    for (var q = 0; q < len; q++)
      test_integers.push(randint(-base, +base) * 2 + k);
    var pos = randint(0, len - 1),
      expected = ++test_integers[pos];
    Test.it(`Testing for ${test_integers}`, _ => {
      Test.assertEquals(findOutlier(test_integers), expected);
    });
  }
});
