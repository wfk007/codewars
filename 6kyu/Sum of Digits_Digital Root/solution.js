function digital_root(n) {
  // ...
  while (n.toString().length > 1) {
    n = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);
  }
  return n;
}
/**
 * Clever
 */
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}
console.log(digital_root(16));
console.log(digital_root(456));
