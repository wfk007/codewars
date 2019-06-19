Test.describe("Basic tests", function() {
  Test.assertEquals(queueTime([], 1), 0, "wrong answer for an empty queue");
  Test.assertEquals(
    queueTime([5], 1),
    5,
    "wrong answer for a single person in the queue"
  );
  Test.assertEquals(
    queueTime([2], 5),
    2,
    "wrong answer for a single person in the queue"
  );
  Test.assertEquals(
    queueTime([1, 2, 3, 4, 5], 1),
    15,
    "wrong answer for a single till"
  );
  Test.assertEquals(
    queueTime([1, 2, 3, 4, 5], 100),
    5,
    "wrong answer for a case with a large number of tills"
  );
  Test.assertEquals(
    queueTime([2, 2, 3, 3, 4, 4], 2),
    9,
    "wrong answer for a case with two tills"
  );
});

(function() {
  function testFn(customers, n) {
    var time = 0;
    var tills = Array(n).fill(0);
    while (customers.length != 0) {
      if (tills.indexOf(0) != -1) {
        tills[tills.indexOf(0)] = customers.shift();
      } else {
        var tdelta = Math.min(...tills);
        time += tdelta;
        tills = tills.map(function(x) {
          return x - tdelta;
        });
      }
    }
    return time + Math.max(...tills);
  }

  Test.describe("Short random tests", function() {
    for (var i = 0; i < 10; i++) {
      var len = Math.floor(Math.random() * 20 + 10);
      var testArr = Array(len)
        .fill(50)
        .map(x => Math.floor(x * Math.random()) + 1);
      var testArrCopy = testArr.slice();
      var testN = Math.floor(Math.random() * 6) + 1;
      var message =
        "Wrong answer for customers = [" +
        testArr.toString() +
        "] and n = " +
        testN;
      Test.assertEquals(
        queueTime(testArr, testN),
        testFn(testArrCopy, testN),
        message
      );
    }
  });

  Test.describe("Long random tests", function() {
    for (var i = 0; i < 10; i++) {
      var len = Math.floor(Math.random() * 140 + 10);
      var testArr = Array(len)
        .fill(20)
        .map(x => Math.floor(x * Math.random()) + 1);
      var testArrCopy = testArr.slice();
      var testN = Math.floor(Math.random() * 20) + 1;
      var message =
        "Wrong answer for customers = [" +
        testArr.toString() +
        "] and n = " +
        testN;
      Test.assertEquals(
        queueTime(testArr, testN),
        testFn(testArrCopy, testN),
        message
      );
    }
  });

  Test.describe("Big number random tests", function() {
    for (var i = 0; i < 10; i++) {
      var len = Math.floor(Math.random() * 40 + 10);
      var testArr = Array(len)
        .fill(100)
        .map(x => Math.floor(x * (Math.random() ^ 2)) + 1);
      var testArrCopy = testArr.slice();
      var testN = Math.floor(Math.random() * 10) + 1;
      var message =
        "Wrong answer for customers = [" +
        testArr.toString() +
        "] and n = " +
        testN;
      Test.assertEquals(
        queueTime(testArr, testN),
        testFn(testArrCopy, testN),
        message
      );
    }
  });
})();
