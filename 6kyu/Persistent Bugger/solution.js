const solution = function(num) {
  let time = 0;
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((acc, cur) => acc * cur)
      .toString();
    time++;
  }
  return time;
};

console.log(solution(39));
console.log(solution(4));
console.log(solution(25));
console.log(solution(999));
