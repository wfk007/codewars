var countBits = function(n) {
  // Program Me
  return n
    .toString(2)
    .split("")
    .filter(v => v === "1").length;
};
/**
 * Clever
 */
countBits = n =>
  n
    .toString(2)
    .split("0")
    .join("").length;
console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
