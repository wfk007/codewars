function list(names) {
  //your code here
  const arr = names
    .map(item => item.name)
    .join(", ")
    .split("");
  if (arr.lastIndexOf(",") !== -1) {
    arr.splice(arr.lastIndexOf(","), 1, " &");
  }
  return arr.join("");
}
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
console.log(list([{ name: "Bart" }]));
console.log(list([]));
