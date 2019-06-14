var pangram = "The quick brown fox jumps over the lazy dog.";
Test.assertEquals(isPangram(pangram), true);

Test.describe("Some tests in random order:", function() {
  var pangrams = [
    // not pangrams:
    [
      "This isn't a pangram!",
      "abcdefghijklmopqrstuvwxyz ",
      "aaaaaaaaaaaaaaaaaaaaaaaaaa",
      "Detect Pangram",
      "A pangram is a sentence that contains every single letter of the alphabet at least once."
    ],

    // pangrams:
    [
      "Cwm fjord bank glyphs vext quiz",
      "Pack my box with five dozen liquor jugs.",
      "How quickly daft jumping zebras vex.",
      "ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ",
      "AbCdEfGhIjKlM zYxWvUtSrQpOn"
    ]
  ];

  var order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(function() {
    return Math.random() > 0.5;
  });
  order.forEach(function(o) {
    var exp = o > 4,
      o = o % 5,
      str = pangrams[+exp][o];
    var missing = "abcdefghijklmnopqrstuvwxyz".split("").filter(function(c) {
      return str.indexOf(c) < 0;
    });
    console.log("Is '" + str + "' a pangram ?");
    Test.assertEquals(
      isPangram(str),
      exp,
      str +
        " is " +
        ["not", ""][+exp] +
        " a pangram" +
        (!!missing ? " (" + missing + " missing)" : "")
    );
  });
});
