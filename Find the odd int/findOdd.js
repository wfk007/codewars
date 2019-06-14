function findOdd(A) {
  //happy coding!
  const obj = {};
  A.forEach(value => {
    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }
  });
  for (let item in obj) {
    if (obj[item] % 2 != 0) {
      return item;
    }
  }
}

/**
 * Best Practice
 */
const findOdd = xs => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([10]));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));
