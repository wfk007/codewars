Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 2, 8, 5, 4, 11]);
Test.assertSimilar(sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [
  2,
  22,
  1,
  5,
  4,
  11,
  37,
  0
]);
Test.assertSimilar(sortArray([1, 111, 11, 11, 2, 1, 5, 0]), [
  1,
  1,
  5,
  11,
  2,
  11,
  111,
  0
]);
Test.assertSimilar(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0
]);
Test.assertSimilar(sortArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9
]);
Test.assertSimilar(sortArray([0, 1, 2, 3, 4, 9, 8, 7, 6, 5]), [
  0,
  1,
  2,
  3,
  4,
  5,
  8,
  7,
  6,
  9
]);

function getArray(length) {
  var arr = [];

  while (arr.length < length) {
    arr.push(Math.round(Math.random() * 100));
  }

  return arr;
}

function validateArray(array) {
  var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map(elem => (elem % 2 === 0 ? elem : odd.shift()));
}

const firstArray = getArray(Math.round(Math.random() * 10));
const secondArray = getArray(Math.round(Math.random() * 20));
const thirdArray = getArray(Math.round(Math.random() * 30));

Test.assertSimilar(sortArray(firstArray), validateArray(firstArray));
Test.assertSimilar(sortArray(secondArray), validateArray(secondArray));
Test.assertSimilar(sortArray(thirdArray), validateArray(thirdArray));
