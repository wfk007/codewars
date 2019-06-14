// var uniqueInOrder = function(iterable) {
//   //your code here - remember iterable can be a string or an array
//   let result = [];
//   if (typeof iterable === "string") {
//     iterable = iterable.split("");
//   }
//   if (iterable.length === 0) {
//     return [];
//   }
//   result.push(iterable[0]);
//   iterable.reduce((prev, curr) => {
//     if (curr !== prev) {
//       result.push(curr);
//     }
//     return curr;
//   });
//   return result;
// };

function uniqueInOrder(it) {
  var result = [];
  var last;

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder([]));
console.log(uniqueInOrder(""));
