Test.describe("Basic Tests", _ => {
  Test.it("Should pass Basic tests", _ => {
    Test.assertEquals(
      reverseWords("The quick brown fox jumps over the lazy dog."),
      "ehT kciuq nworb xof spmuj revo eht yzal .god"
    );
    Test.assertEquals(reverseWords("apple"), "elppa");
    Test.assertEquals(reverseWords("a b c d"), "a b c d");
    Test.assertEquals(
      reverseWords("double  spaced  words"),
      "elbuod  decaps  sdrow"
    );
    Test.assertEquals(reverseWords("stressed desserts"), "desserts stressed");
    Test.assertEquals(reverseWords("hello hello"), "olleh olleh");
  });
});

Test.describe("Random Tests", _ => {
  Test.it("Should pass Random tests", _ => {
    var words = [
      "Kata",
      "should",
      "always",
      "have",
      "random",
      "tests",
      "case",
      "to",
      "avoid",
      "hardocoded",
      "solution.",
      "This",
      "is",
      "a",
      "rule!"
    ];

    for (var i = 0; i < 40; i++) {
      var str = Test.randomize(words)
          .slice(0, Math.random() * words.length + 1)
          .join(" ".repeat(Math.floor(Math.random() * 2) + 1)),
        exp = str
          .split(" ")
          .map(function(word) {
            return word
              .split("")
              .reverse()
              .join("");
          })
          .join(" ");
      Test.assertEquals(reverseWords(str), exp);
    }
  });
});
