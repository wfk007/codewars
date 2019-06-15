function spinWords(str) {
  //TODO Have fun :)
  return str
    .split(" ")
    .map(v => {
      return v.length >= 5
        ? v
            .split("")
            .reverse()
            .join("")
        : v;
    })
    .join(" ");
}
console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
