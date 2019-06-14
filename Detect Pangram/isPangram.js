function isPangram(string) {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
  string
    .toLowerCase()
    .split("")
    .forEach(item => {
      alphabet.indexOf(item) !== -1
        ? alphabet.splice(alphabet.indexOf(item), 1)
        : void 0;
    });
  return alphabet.length > 0 ? false : true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));

/**
 * best practice
 */
function isPangram1(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x) {
    return string.indexOf(x) !== -1;
  });
}
