Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"), "es");
    Test.assertEquals(getMiddle("testing"), "t");
    Test.assertEquals(getMiddle("middle"), "dd");
    Test.assertEquals(getMiddle("A"), "A");
  });
});

Test.describe("50 Random tests", function() {
  //----------------
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function GetMiddleT(s) {
    var middle = Math.floor(s.length / 2);
    if (s.length % 2 == 0) return s[middle - 1] + s[middle];
    else return s[middle];
  }
  //----------------
  for (var i = 0; i < 50; i++) {
    var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rando = randint(1, 1000);
    var randStr = "";
    for (var j = 0; j < rando; j++) {
      var x = randint(0, alph.length);
      randStr += alph[x];
    }
    Test.it("Random Testing", function() {
      Test.assertEquals(getMiddle(randStr), GetMiddleT(randStr));
    });
  }
});
