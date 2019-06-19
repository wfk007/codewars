function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .map(v => (v >= "a" && v <= "z" ? v.charCodeAt() - 96 : ""))
    .filter(v => v !== "")
    .join(" ");
}
/**
 * Best Practice
 */
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(c => c.charCodeAt() - 64)
    .join(" ");
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock.") ===
    "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
);
