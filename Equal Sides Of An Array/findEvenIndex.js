function findEvenIndex(arr) {
  //Code goes here!
  for (let i = 0; i < arr.length; i++) {
    const leftArr = i === 0 ? [0] : arr.slice(0, i);
    const rightArr = i === arr.length - 1 ? [0] : arr.slice(i + 1, arr.length);
    if (
      leftArr.reduce((acc, cur) => acc + cur, 0) ===
      rightArr.reduce((acc, cur) => acc + cur, 0)
    ) {
      return i;
    }
  }
  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
