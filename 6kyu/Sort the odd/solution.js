function sortArray(array) {
  // Return a sorted array.
  const sortedOddArray = array.filter(v => v % 2 === 1).sort((a, b) => b - a);
  return array.map(v => (v % 2 === 1 ? sortedOddArray.pop() : v));
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
