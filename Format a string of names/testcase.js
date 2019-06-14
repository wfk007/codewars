Array.prototype.shuffle = function() {
  for (var i = this.length, j, c; i; ) {
    j = Math.floor(Math.random() * this.length);
    c = this[--i];
    this[i] = this[j];
    this[j] = c;
  }
};

Test.describe("Basic tests", function() {
  Test.assertEquals(
    list([
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
      { name: "Homer" },
      { name: "Marge" }
    ]),
    "Bart, Lisa, Maggie, Homer & Marge",
    "Must work with many names"
  );
  Test.assertEquals(
    list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
    "Bart, Lisa & Maggie",
    "Must work with many names"
  );
  Test.assertEquals(
    list([{ name: "Bart" }, { name: "Lisa" }]),
    "Bart & Lisa",
    "Must work with two names"
  );
  Test.assertEquals(
    list([{ name: "Bart" }]),
    "Bart",
    "Wrong output for a single name"
  );
  Test.assertEquals(list([]), "", "Must work with no names");
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  function solist(names) {
    res = [];
    for (item = 0; item < names.length; item++) {
      res.push(names[item].name);
    }
    return res.length > 1
      ? res.slice(0, res.length - 1).join(", ") + " & " + res[res.length - 1]
      : res.join("");
  }
  base = [
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
    { name: "Moe" },
    { name: "Barney" },
    { name: "Maude" },
    { name: "Ned" },
    { name: "Seymour" }
  ];
  for (var i = 0; i < 40; i++) {
    base.shuffle();
    testmat = base.slice(0, randint(0, 9));
    solution = solist(testmat);
    Test.it("Testing for " + (solution != "" ? solution : "None"), function() {
      Test.assertEquals(
        list(testmat),
        solution,
        "It should work for random tests too"
      );
    });
  }
});
