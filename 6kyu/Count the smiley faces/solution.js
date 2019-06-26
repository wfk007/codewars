function countSmileys(arr) {
  // return arr.filter(face => face.match(/[:;][-~]?[)D]/)).length;
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
console.log(countSmileys([]));
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
