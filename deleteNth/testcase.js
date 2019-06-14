Test.describe("Basic tests", function() {
  Test.assertDeepEquals(deleteNth([20, 37, 20, 21], 1), [20, 37, 21], "x = 1");
  Test.assertDeepEquals(
    deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
    [1, 1, 3, 3, 7, 2, 2, 2],
    "x =3"
  );
  Test.assertDeepEquals(
    deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3),
    [1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5],
    "x = 3"
  );
  Test.assertDeepEquals(
    deleteNth([1, 1, 1, 1, 1], 5),
    [1, 1, 1, 1, 1],
    "x = 5"
  );
  Test.assertDeepEquals(deleteNth([], 5), [], "may_e = 5");
});

Test.describe("Random tests", function() {
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }

  Array.prototype.shuffle = function() {
    var i = this.length,
      j,
      k;
    for (i; i; ) {
      j = Math.floor(Math.random() * this.length);
      k = this[--i];
      this[i] = this[j];
      this[j] = k;
    }
  };

  function sol_nth(arr, x) {
    var count = {};
    return arr.filter(function(a) {
      count[a] = ~~count[a] + 1;
      return count[a] <= x;
    });
  }

  for (let _ = 0; _ < 40; _++) {
    let order = [];
    let orderlen = randint(3, 10);
    for (var i = 0; i < orderlen; i++) {
      let item = randint(1, 50);
      let repeats = randint(1, 10);
      for (var j = 0; j < repeats; j++) {
        order.push(item);
      }
    }
    order.shuffle();
    let max_e = randint(1, 10);
    let solution = sol_nth([].concat(order), max_e);
    Test.it(
      "Testing for delete_nth([" +
        order.join(", ") +
        "], " +
        max_e.toString() +
        ")",
      function() {
        Test.assertDeepEquals(
          deleteNth(order, max_e),
          solution,
          "It should work on random inputs too!"
        );
      }
    );
  }
});
