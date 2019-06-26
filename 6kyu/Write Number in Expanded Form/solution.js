function expandedForm(num) {
  // Your code here
  return num
    .toString()
    .split("")
    .map((value, index, arr) => value + "0".repeat(arr.length - index - 1))
    .filter(v => v != 0)
    .join(" + ");
}
console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));
