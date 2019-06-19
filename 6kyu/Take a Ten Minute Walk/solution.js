function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length !== 10) return false;
  let x = 0,
    y = 0;
  walk.forEach(v => {
    switch (v) {
      case "n":
        y++;
        break;
      case "s":
        y--;
        break;
      case "w":
        x--;
        break;
      case "e":
        x++;
        break;
    }
  });
  return x == 0 && y === 0
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
