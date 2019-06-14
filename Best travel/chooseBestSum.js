function chooseBestSum(t, k, ls) {
  // your code
  /**
   * t = 174 miles
   * ls = []
   * k = number of town to visit
   */
  let max = null;

  k_combinations(ls, k)
    .map(arr => arr.reduce((acc, cur) => acc + cur))
    .forEach(v => {
      if (v <= t && v > max) {
        max = v;
      }
    });

  return max;
}
// [50, 55, 57, 58, 60]
function k_combinations(set, k) {
  var i, j, combs, head, tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k == set.length) {
    return [set];
  }
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
// chooseBestSum(163, 3, [50, 55, 56, 57, 58]);
