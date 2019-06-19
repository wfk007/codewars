describe("static tests", function() {
  it("should return correct text", function() {
    Test.assertEquals(likes([]), "no one likes this");
    Test.assertEquals(likes(["Peter"]), "Peter likes this");
    Test.assertEquals(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
    Test.assertEquals(
      likes(["Max", "John", "Mark"]),
      "Max, John and Mark like this"
    );
    Test.assertEquals(
      likes(["Alex", "Jacob", "Mark", "Max"]),
      "Alex, Jacob and 2 others like this"
    );
  });
});

describe("random tests", function() {
  var names = [],
    sample;
  while (names.length < 100) names.push(Test.randomToken());

  it("should return correct text for 1 name", function() {
    sample = Test.randomize(names).slice(0, 1);
    Test.assertEquals(likes(sample.slice()), sample[0] + " likes this");
  });

  it("should return correct text for 2 names", function() {
    sample = Test.randomize(names).slice(0, 2);
    Test.assertEquals(
      likes(sample.slice()),
      sample[0] + " and " + sample[1] + " like this"
    );
  });

  it("should return correct text for 3 names", function() {
    sample = Test.randomize(names).slice(0, 3);
    Test.assertEquals(
      likes(sample.slice()),
      sample[0] + ", " + sample[1] + " and " + sample[2] + " like this"
    );
  });

  it("should return correct text for 4 or more names", function() {
    // 4 names
    sample = Test.randomize(names).slice(0, 4);
    Test.assertEquals(
      likes(sample.slice()),
      sample[0] + ", " + sample[1] + " and 2 others like this"
    );

    // random number of names
    sample = Test.randomize(names).slice(
      0,
      Math.max(5, Math.min(99, Test.randomNumber()))
    );
    Test.assertEquals(
      likes(sample.slice()),
      sample[0] +
        ", " +
        sample[1] +
        " and " +
        (sample.length - 2) +
        " others like this"
    );

    // 100 names
    sample = Test.randomize(names);
    Test.assertEquals(
      likes(sample.slice()),
      sample[0] + ", " + sample[1] + " and 98 others like this"
    );
  });
});
