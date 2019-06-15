function duplicateCount(text) {
  //...
  const obj = {};
  let sum = 0;
  text
    .toLowerCase()
    .split("")
    .forEach(v => (!obj[v] ? (obj[v] = 1) : obj[v]++));
  for (let item in obj) {
    if (obj[item] > 1) sum++;
  }
  return sum;
}

/**
 * Best Practice
 */
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function(val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
