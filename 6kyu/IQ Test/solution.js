function iqTest(numbers) {
  // ...
  let index = -1;
  numbers
    .split(" ")
    .map(v => v % 2)
    .filter((v, i, a) => {
      if (a.indexOf(v) === a.lastIndexOf(v)) {
        index = i;
      }
    });
  return index + 1;
}
/**
 * Best Practice
 */

function iqTest(numbers) {
  numbers = numbers.split(" ").map(function(el) {
    return parseInt(el);
  });

  var odd = numbers.filter(function(el) {
    return el % 2 === 1;
  });
  var even = numbers.filter(function(el) {
    return el % 2 === 0;
  });

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}
console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));
console.log(iqTest("1 2 1 1"));
