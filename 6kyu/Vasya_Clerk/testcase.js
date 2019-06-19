Test.describe("Example tests", function() {
  Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
  Test.assertEquals(tickets([25, 100]), "NO");
});

Test.describe("Some more tests", function() {
  Test.randomize([
    [[50, 50, 50, 50, 50, 50, 50, 50, 50, 50], "NO"],
    [[100, 100, 100, 100, 100, 100, 100, 100, 100, 100], "NO"],
    [[25, 25, 25, 25, 50, 100, 50], "YES"],
    [[25, 25], "YES"],
    [[50, 100, 100], "NO"],
    [[25, 25, 25, 25, 25, 100, 100], "NO"],
    [[25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 100, 100, 100, 100], "NO"]
  ]).forEach(function(tst) {
    var arr = tst[0],
      exp = tst[1];
    Test.assertEquals(tickets(arr), exp);
  });
});

Test.describe("Some random tests", function() {
  var rnd = Math.random,
    rndOf = function(aa) {
      return aa[~~(rnd() * aa.length)];
    };

  var ok = [[25, 25, 25, 100], [25, 50, 25, 100], [25, 25, 50, 100]],
    ko = [[25, 50, 50], [25, 100], [50], [100]];

  var tst = function() {
    var oo = [],
      exp = ~~(rnd() * 2);
    for (var o = 3 + ~~(rnd() * 3); o; o--) oo = oo.concat(rndOf(ok));

    if (exp == 1) {
      exp = "NO";
      oo = oo.concat(rndOf(ko)).concat(rndOf([25, 50, 100]));
    } else {
      exp = "YES";
    }
    Test.assertEquals(tickets(oo.slice()), exp, "Line = " + oo);
  };

  var t = 12;
  while (t--) tst();
});
