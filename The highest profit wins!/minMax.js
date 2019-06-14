function minMax(arr) {
  let min = arr[0],
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] > max ? (max = arr[i]) : void 0;
    arr[i] < min ? (min = arr[i]) : void 0;
  }
  return [min, max]; // fix me!
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([1]));
console.log(minMax([2334454, 5]));

