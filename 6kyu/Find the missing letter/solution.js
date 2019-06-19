function findMissingLetter(array) {
  const numbers = array.map(v => v.charCodeAt());
  let len = numbers.length;
  return String.fromCharCode(
    ((numbers[0] + numbers[len - 1]) * (len + 1)) / 2 -
      numbers.reduce((acc, cur) => acc + cur)
  );
}
/**
 * Best Practice
 * 计算第一个字母的数字形式，累加1，直到出现不存在的数为止
 */
function findMissingLetter(array) {
  var i = array[0].charCodeAt();
  array.map(x => (x.charCodeAt() == i ? i++ : i));
  return String.fromCharCode(i);
}
console.log(findMissingLetter(["Q", "R", "S"]));
