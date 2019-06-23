function toCamelCase(str) {
  return str
    .split(/[-_]/g)
    .reduce(
      (acc, cur) => acc + cur.substring(0, 1).toUpperCase() + cur.substring(1)
    );
}
/**
 * Best Practice
 */
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function(match) {
    return match.charAt(1).toUpperCase();
  });
}
console.log(toCamelCase("the-stealth-warrior") === "theStealthWarrior");
console.log(toCamelCase("The_Stealth_Warrior") === "TheStealthWarrior");
