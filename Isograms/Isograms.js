/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */
function isIsogram(str) {
  if (str === "") {
    return true;
  }
  const map = new Map();

  const arr = str.toLowerCase().split("");

  for (var i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      return false;
    } else {
      map.set(arr[i], 1);
    }
  }
  return true;
}
