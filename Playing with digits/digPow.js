function digPow(n, p) {
  // ...
  let result = [...n.toString()].reduce((acc, cur, index) => {
    return acc + Math.pow(Number(cur), p + index);
  }, 0);
  return result % n ? -1 : result / n;
}
digPow(89, 1);
digPow(695, 2);
digPow(46288, 3);
