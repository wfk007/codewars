a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["arp", "live", "strong"];
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"]);
//a1 = ["arp", "arp", "arp"] //-- dumb test
//Test.assertSimilar(inArray(a1, a2), ["arp"])
a1 = ["xyz", "live", "strong"];
Test.assertSimilar(inArray(a1, a2), ["live", "strong"]);
a1 = ["live", "strong", "arp"];
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"]);
a1 = ["live", "strong", , "lyal", "lysh", "arp"];
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"]);
a1 = ["tarp", "mice", "bull"];
Test.assertSimilar(inArray(a1, a2), []);
a1 = [];
Test.assertSimilar(inArray(a1, a2), []);

Test.describe("Some random test:", function() {
  uu = "I should have known that you would have a perfect answer for me (since most Ruby questions \
  I browse here have your input somewhere). I am glad you pointed out the versioning; I \
  am using 1.9.2. apidock (mladen's comment) does not have sample; neither does ruby-doc. In \
  your opinion, what is the best reference for Ruby, updated to 1.9?".split(
    /\s+/
  );

  vv = [
    "1.9",
    "ou",
    "ve",
    "ect",
    "omm",
    "gla",
    "oint",
    "pini",
    "wh",
    "oes",
    "by",
    "ion",
    "or",
    "he",
    "ple",
    "ing"
  ];

  var sample = function(aa, x) {
    return Test.randomize(aa).slice(0, x);
  };

  var __in__array__ = function(aa, bb) {
    return aa.filter(function(a) {
      return bb.some(function(b) {
        return b.indexOf(a) > -1;
      });
    });
  };

  Test.randomize([1, 2, 3, 4, 5, 6, 7, 8, 9]).forEach(function(x) {
    var arr1 = sample(vv, x + 1),
      arr2 = sample(uu, 15 + x * 2),
      exp = __in__array__(arr1, arr2).sort();
    Test.assertSimilar(inArray(arr1, arr2), exp);
  });
});
