function findUniq(arr) {
  // do magic
  let tmp = 0;
  let arr1 = arr.filter(item => {
    if (item === arr[0]) {
      return true;
    } else {
      tmp = item;
      return false;
    }
  });
  if (arr1.length === 1) {
    return arr1[0];
  } else {
    return tmp;
  }
}
console.log(findUniq3([0, 1, 0]));
console.log(findUniq3([1, 1, 1, 2, 1, 1]));
console.log(findUniq3([3, 10, 3, 3, 3]));

function findUniq1(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function findUniq2(arr) {
  return arr.filter(value => arr.indexOf(value) == arr.lastIndexOf(value));
}
