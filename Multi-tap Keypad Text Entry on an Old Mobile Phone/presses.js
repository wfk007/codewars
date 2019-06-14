function presses(phrase) {
  // To do...
  const refrence = {
    "0": 2,
    "1": 1,
    "2": 4,
    "3": 4,
    "4": 4,
    "5": 4,
    "6": 4,
    "7": 5,
    "8": 4,
    "9": 5,
    A: 1,
    B: 2,
    C: 3,
    D: 1,
    E: 2,
    F: 3,
    G: 1,
    H: 2,
    I: 3,
    J: 1,
    K: 2,
    L: 3,
    M: 1,
    N: 2,
    O: 3,
    P: 1,
    Q: 2,
    R: 3,
    S: 4,
    T: 1,
    U: 2,
    V: 3,
    W: 1,
    X: 2,
    Y: 3,
    Z: 4,
    "*": 1,
    "#": 1,
    " ": 1
  };
  return phrase.toUpperCase().split("").reduce((acc, cur) => acc + refrence[cur], 0);
}
console.log(presses("LOL"));
console.log(presses("HOW R U"));

function presses1(phrase) {
  var chunks = [
      "1",
      "ABC2",
      "DEF3",
      "GHI4",
      "JKL5",
      "MNO6",
      "PQRS7",
      "TUV8",
      "WXYZ9",
      " 0"
    ],
    phrase = phrase.toUpperCase().split(""),
    total = 0;

  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });

  return total;
}
