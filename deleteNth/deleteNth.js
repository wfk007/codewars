function deleteNth(arr, n) {
  // ...
  const map = new Map();
  const result = [];
  if (n === 0) return result;
  arr.forEach(element => {
    if (!map.has(element)) {
      result.push(element);
      map.set(element, n - 1);
    } else {
      let total = map.get(element);
      if (total > 0) {
        result.push(element);
        map.set(element, total - 1);
      }
    }
  });
  return result
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
