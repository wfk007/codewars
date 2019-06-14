function duplicateEncode(word) {
  const arr = word.toLowerCase().split("");
  return arr.reduce(
    (acc, cur) => acc + (arr.indexOf(cur) === arr.lastIndexOf(cur) ? "(" : ")"),
    ""
  );
}
