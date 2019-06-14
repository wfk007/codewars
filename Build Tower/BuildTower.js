function towerBuilder(nFloors) {
  // build here
  const result = [];
  let index = nFloors;
  while (index > 0) {
    let total = 2 * nFloors - 1;
    let current = 2 * index - 1;
    let args = "*".repeat(current).split("");
    const tmpArray = " ".repeat(total).split("");
    tmpArray.splice(nFloors - index, current, ...args);
    result.unshift(tmpArray.join(""));
    index--;
  }
  return result;
}
console.log(towerBuilder(2));

function towerBuilder(n) {
  return Array.from({ length: n }, function(v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}
