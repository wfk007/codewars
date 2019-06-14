var test = function(arr, res) {
  Test.assertSimilar(
    minMax(arr),
    res,
    "tested on " + JSON.stringify(arr) + ":"
  );
};

Test.describe("minMax", function() {
  Test.it("should work for some examples", function() {
    var i, r;
    test([1, 2, 3, 4, 5], [1, 5]);
    test([2334454, 5], [5, 2334454]);

    for (i = 0; i < 20; ++i) {
      r = Math.random();
      test([r], [r, r]);
    }
  });
  Test.it("should work for random lists", function() {
    var i, s, l, min, max, t;

    for (i = 0; i < 100; ++i) {
      s = [];
      min = Infinity;
      max = -Infinity;
      l = (1 + Math.random() * 120) | 0;
      while (l-- > 0) {
        t = (Math.random() * 0xfffff - 0x8ffff) | 0;
        max = Math.max(t, max);
        min = Math.min(t, min);
        s.push(t);
      }
      test(s, [min, max]);
    }
  });
});

function minMax1(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
function minMax2(arr) {
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}
