/**
 * 题目描述：
 * 1、最少 6 个字符
 * 2、包括一个小写字母
 * 3、包括一个大写字母
 * 4、包括一个数字
 */

/**
 * Time: 931ms Passed: 16 Failed: 2
 */
function validate(password) {
  return (
    password.length >= 6 &&
    [...password].some(item => item >= "a" && item <= "z") &&
    [...password].some(item => item >= "A" && item <= "Z") &&
    [...password].some(item => item >= "0" && item <= "9")
  );
}

/**
 * Time: 939ms Passed: 17 Failed: 1
 */
function validate(password) {
  // \w 表示匹配一个字母或者一个数字或者一个下划线(word)
  return (
    /\w{6,}/.test(password) &&
    /[0-9]/.test(password) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password)
  );
}

/**
 * Time: 939ms Passed: 17 Failed: 1
 */
function validate(password) {
  return (
    /[0-9a-zA-Z]{6,}/.test(password) &&
    /[0-9]/.test(password) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password)
  );
}

/**
 * Time: 910ms Passed: 18 Failed: 0
 */
function validate(password) {
  return (
    /^\w{6,}$/.test(password) &&
    /[0-9]/.test(password) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password)
  );
}

/**
 * bestpractice：?= 不太懂
 */

function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
}

console.log(validate("djI38D55"));
console.log(validate("a2.d412"));
console.log(validate("JHD5FJ53"));
console.log(validate("!fdjn345"));
console.log(validate("jfkdfj3j"));
console.log(validate("123"));
console.log(validate("abc"));
console.log(validate("Password123"));
