Test.assertEquals(findUniq([1, 1, 1, 2, 1, 1]), 2);
Test.assertEquals(findUniq([0, 0, 0.55, 0, 0]), 0.55);

// Basic tests (shuffled)
Test.assertEquals(findUniq([4, 4, 4, 3, 4, 4, 4, 4]), 3);
Test.assertEquals(findUniq([5, 5, 5, 5, 4, 5, 5, 5]), 4);
Test.assertEquals(findUniq([6, 6, 6, 6, 6, 5, 6, 6]), 5);
Test.assertEquals(findUniq([7, 7, 7, 7, 7, 7, 6, 7]), 6);
// The last item
Test.assertEquals(findUniq([8, 8, 8, 8, 8, 8, 8, 7]), 7);
Test.assertEquals(findUniq([3, 3, 2, 3, 3, 3, 3, 3]), 2);
Test.assertEquals(findUniq([2, 1, 2, 2, 2, 2, 2, 2]), 1);
// The first item
Test.assertEquals(findUniq([0, 1, 1, 1, 1, 1, 1, 1]), 0);

// Very big number
Test.assertEquals(
  findUniq(generateTestArr(Math.pow(2, 40), Math.pow(2, 50), 100)),
  Math.pow(2, 40)
);

// Negative number
Test.assertEquals(findUniq(generateTestArr(-1, 1, 1000)), -1);

// Float number
Test.assertEquals(
  findUniq(generateTestArr(0.0000001, 0.0010001, 1000)),
  0.0000001
);

// Very long array
Test.assertEquals(findUniq(generateTestArr(42, 24, 10000000)), 42);

// Infitiy and -Infiity
Test.assertEquals(
  findUniq(generateTestArr(-Infinity, Infinity, 1000)),
  -Infinity
);

// Random numbers
(() => {
  let a = Math.random();
  let b = Math.random();
  Test.assertEquals(findUniq(generateTestArr(a, b, 1000)), a);
})();

function generateTestArr(answer, mass, length) {
  let arr = [];
  // Generate random integer in [0, length)
  let answerIndex = Math.floor(Math.random() * length);

  // Fill the array with mass and answer
  for (let i = 0; i < length; i++) {
    // Answer will be on answerIndex
    arr.push(i === answerIndex ? answer : mass);
  }

  return arr;
}
