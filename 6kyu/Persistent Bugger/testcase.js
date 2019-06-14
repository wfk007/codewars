describe("Initial Tests", function() {
  Test.assertEquals(persistence(39), 3);
  Test.assertEquals(persistence(4), 0);
  Test.assertEquals(persistence(25), 2);
  Test.assertEquals(persistence(999), 4);
});

describe("Random tests", function() {
  function sol(num) {
    var c = num > 9 ? 1 : 0;
    while ((num = (num + "").split("").reduce((mul, cv) => mul * +cv, 1)) > 9)
      ++c;
    return c;
  }
  var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  var times = 100;
  while (--times >= 0) {
    var n = rand(1, 10000000);
    Test.assertEquals(persistence(n), sol(n));
  }
});
