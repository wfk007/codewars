// var maxSequence = function(arr) {
//   // ...
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let prev = arr[i],
//       current = 0;
//     for (let j = i + 1; j < arr.length; j++) {
//       current = prev + arr[j];
//       result = Math.max(result, prev, current);
//       prev = current;
//     }
//     result = Math.max(result, prev);
//   }
//   return result;
// };

var maxSequence = function(arr) {
  debugger;
  var min = 0,
    ans = 0,
    i,
    sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([]));
console.log(maxSequence([-1, -2, -3, -4]));
console.log(maxSequence([1, 2, 3, 4, 5, 6, 7, 8, 9, -50, 1111]));
