function high(x) {
  const baseStr = "abcdefghijklmnopqrstuvwxyz";
  const xArr = x.split(" ");
  let maxScore = { value: 0, str: "" };

  for (let i = 0; i < xArr.length; i++) {
    let currentScore = 0;
    for (let j = 0; j < xArr[i].length; j++) {
      currentScore += baseStr.indexOf(xArr[i][j]);
    }
    if (currentScore > maxScore.value) {
      maxScore.value = currentScore;
      maxScore.str = xArr[i];
    }
  }
  return maxScore.str;
}
console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));

function high1(s) {
  let as = s
    .split(" ")
    .map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}
