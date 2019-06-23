function solution(number) {
  // convert the number to a roman numeral
  const roman = [
    ["M", "", ""],
    ["C", "D", "M"],
    ["X", "L", "C"],
    ["I", "V", "X"]
  ];
  return number
    .toString()
    .split("")
    .reduceRight((acc, cur) => {
      let romanLetters = roman.pop();
      let curNumber = Number(cur);
      if (curNumber >= 1 && curNumber <= 3) {
        acc = romanLetters[0].repeat(curNumber) + acc;
      } else if (curNumber === 4) {
        acc = romanLetters[0] + romanLetters[1] + acc;
      } else if (curNumber >= 5 && curNumber <= 8) {
        acc = romanLetters[1] + romanLetters[0].repeat(curNumber - 5) + acc;
      } else if (curNumber === 9) {
        acc = romanLetters[0] + romanLetters[2] + acc;
      }
      return acc;
    }, "");
}
/**
 * Best Practice
 */
function solution(number) {
  // convert the number to a roman numeral
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var ans = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}
