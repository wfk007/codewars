function findOutlier(integers) {
  //your code here
  let index = -1;
  const arr = integers
    .map(v => Math.abs(v % 2))
    .filter((v, i, a) => {
      if (a.indexOf(v) == a.lastIndexOf(v)) {
        return (index = i);
      }
    });
  return integers[index];
}
/**
 * Best Practice
 */
function findOutlier(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));
