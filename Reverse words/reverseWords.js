function reverseWords(str) {
  // Go for it
  let arr = [];
  let i = 0,
    j = 0;
  while (i < str.length) {
    while (str[i] !== " " && i < str.length) {
      i++;
    }
    arr.push(str.slice(j, i));
    j = i;
    while (str[i] === " " && i < str.length) {
      i++;
    }
    if (i < str.length) {
      arr.push(str.slice(j, i));
      j = i;
    }
  }
  return arr.map(item =>
    item
      .split("")
      .reverse()
      .join("")
  ).join('');
}

function reverseWords1(str) {
  // Go for it
  //split words into seperate arrays
  return str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}

function reverseWords2(str) {
  return str
    .split(" ")
    .map(function(word) {
      return word
        .split("")
        .reverse()
        .join("");
    })
    .join(" ");
}
