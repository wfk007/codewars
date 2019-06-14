Test.describe("Basic tests", function() {
  Test.assertSimilar(isIsogram("Dermatoglyphics"), true);
  Test.assertSimilar(isIsogram("isogram"), true);
  Test.assertSimilar(isIsogram("moose"), false);
  Test.assertSimilar(isIsogram("isIsogram"), false);
  Test.assertSimilar(isIsogram("aba"), false, "same chars may not be adjacent");
  Test.assertSimilar(
    isIsogram("moOse"),
    false,
    "same chars may not be same case"
  );
  Test.assertSimilar(isIsogram("thumbscrewjapingly"), true);
  Test.assertSimilar(isIsogram(""), true, "an empty string is a valid isogram");
});

Test.describe("More tests", function() {
  var lowers = "abcdefghijklmnopqrstuvwxyz",
    uppers = lowers.toUpperCase();
  Test.assertEquals(isIsogram(lowers), true);
  Test.assertEquals(isIsogram(uppers), true);

  var rnd = function(x) {
    return ~~(Math.random() * x);
  };
  var rndChr = function(str) {
    return str[rnd(str.length)];
  };

  Test.assertEquals(isIsogram(lowers + rndChr(lowers)), false);
  Test.assertEquals(isIsogram(lowers + rndChr(uppers)), false);

  var shuffle = function(str) {
    return str
      .split("")
      .sort(function() {
        return Math.random() < 0.5;
      })
      .join("");
  };

  console.log("Random tests");
  for (var t = 0; t < 9; t++) {
    var cc = shuffle(lowers),
      exp = true,
      chr;
    var len = lowers.length,
      len = Math.min(3 + rnd(len), len),
      str = cc.slice(0, len);
    if (rnd(99) < 50) {
      chr = rndChr(str);
      if (rnd(99) < 50) chr = chr.toUpperCase();
      str = shuffle(shuffle(str + chr));
      exp = false;
    }
    console.log("> " + str + " ?");
    Test.assertEquals(
      isIsogram(str),
      exp,
      !exp ? " 2 '" + chr + "' in " + str + " !" : ""
    );
  }
});
