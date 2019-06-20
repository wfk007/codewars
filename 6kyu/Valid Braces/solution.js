function validBraces(braces) {
  //TODO
  const stack = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "[" || braces[i] === "{") {
      stack.push(braces[i]);
    } else if (braces[i] === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    } else if (braces[i] === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    } else {
      if (stack.pop() !== "{") {
        return false;
      }
    }
  }
  return stack.length === 0 ? true : false;
}
/**
 * Best Practice
 */
function validBraces(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
/**
 * Clever
 */
function validBraces(braces) {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return !braces.length;
}
function validBraces(braces) {
  while (
    braces.indexOf("{}") != -1 ||
    braces.indexOf("()") != -1 ||
    braces.indexOf("[]") != -1
  ) {
    braces = braces
      .replace("{}", "")
      .replace("()", "")
      .replace("[]", "");
  }
  return braces.length == 0;
}
console.log(validBraces("[(])"));
