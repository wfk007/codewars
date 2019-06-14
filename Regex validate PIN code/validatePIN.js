function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePIN("1"));
console.log(validatePIN("a123"));
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("123456"));

/**
 * literal character
 * meta character:
 *    \d
 *    \w
 *    \s
 *    .
 * quantifiers:
 *    *
 *    +
 *    ?
 *    {m,n}
 *    {m,}
 *    {m}
 * position:
 *    ^
 *    $
 *    \b: word border
 */
