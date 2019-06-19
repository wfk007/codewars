function likes(names) {
  // TODO
  let result = "";
  switch (names.length) {
    case 0:
      result = `no one likes this`;
      break;
    case 1:
      result = `${names[0]} likes this`;
      break;
    case 2:
      result = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      result = `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
      break;
  }
  return result;
}
/**
 * Clever
 */
function likes(names) {
  var templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this"
  ];
  var idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, function(val) {
    return val === "{name}" ? names.shift() : names.length;
  });
}
