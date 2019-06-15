function order(words) {
  // ...
  return words
    .split(" ")
    .sort(
      (a, b) =>
        a.split("").find(v => v >= 1 && v <= 9) -
        b.split("").find(v => v >= 1 && v <= 9)
    )
    .join(" ");
}
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

/**
 * 对于匹配数字的处理不同：
 */
function order(words) {
  return words
    .split(" ")
    .sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
