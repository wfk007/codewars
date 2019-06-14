function test(n, expected) {
  let actual = solution(n);
  Test.assertEquals(actual, expected, `Expected ${expected}, got ${actual}`);
}

Test.describe("basic tests", function() {
  test(10, 23);
  test(20, 78);
  test(200, 9168);
});

Test.describe("smallest cases", function() {
  test(-1, 0);
  test(0, 0);
  test(1, 0);
  test(2, 0);
  test(3, 0);
  test(4, 3);
  test(5, 3);
  test(6, 8);
});

function _solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

Test.describe("random cases", function() {
  for (var i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * 200);
    test(rand, _solution(rand));
  }
});
