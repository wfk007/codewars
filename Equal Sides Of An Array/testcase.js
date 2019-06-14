Test.describe("FindEvenIndex", function() {
  Test.it("Tests", function() {
    Test.assertEquals(
      findEvenIndex([1, 2, 3, 4, 3, 2, 1]),
      3,
      "The array was: [1,2,3,4,3,2,1] \n"
    );
    Test.assertEquals(
      findEvenIndex([1, 100, 50, -51, 1, 1]),
      1,
      "The array was: [1,100,50,-51,1,1] \n"
    );
    Test.assertEquals(
      findEvenIndex([1, 2, 3, 4, 5, 6]),
      -1,
      "The array was: [1,2,3,4,5,6] \n"
    );
    Test.assertEquals(
      findEvenIndex([20, 10, 30, 10, 10, 15, 35]),
      3,
      "The array was: [20,10,30,10,10,15,35] \n"
    );
    Test.assertEquals(
      findEvenIndex([20, 10, -80, 10, 10, 15, 35]),
      0,
      "The array was: [20,10,-80,10,10,15,35] \n"
    );
    Test.assertEquals(
      findEvenIndex([10, -80, 10, 10, 15, 35, 20]),
      6,
      "The array was: [10,-80,10,10,15,35,20] \n"
    );
  });
});
Test.describe("50 Random tests", function() {
  //----------------
  function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function findEvenIndexT(arr) {
    for (var i = 0; i < arr.length; i++) {
      var list1 = arr.slice(0, i);
      var list2 = arr.slice(i + 1, arr.length);
      if (addArrayT(list1) == addArrayT(list2)) {
        return i;
      }
    }
    return -1;
  }
  function addArrayT(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  //----------------
  for (var i = 0; i < 50; i++) {
    var tOrF = randint(1, 2);
    var rando = randint(2, 500);
    var index = 0;
    var output = [];
    for (var j = 0; j < rando; j++) {
      var x = randint(-10000, 10000);
      output.push(x);
    }
    if (tOrF == 1) {
      index = randint(1, output.length - 1);
      var list1 = output.slice(0, index);
      var list2 = output.slice(index + 1, output.length);
      output.push(addArrayT(list1) - addArrayT(list2));
    }
    var duplicate = output.slice(0);
    Test.it("Random Testing", function() {
      Test.assertEquals(
        findEvenIndex(duplicate),
        findEvenIndexT(output),
        "Your answer failed on: " + output.toString() + "\n"
      );
    });
  }
});
