function tickets(peopleInLine) {
  // ...
  let money = { "25": 0, "50": 0, "100": 0 };

  for (let i = 0; i < peopleInLine.length; i++) {
    money[peopleInLine[i]]++;
    if (peopleInLine[i] === 50) {
      if (money["25"] === 0) {
        return "NO";
      } else {
        money["25"]--;
      }
    }
    if (peopleInLine[i] === 100) {
      if (money["50"] === 0) {
        if (money["25"] < 3) {
          return "NO";
        } else {
          money["25"] -= 3;
        }
      } else {
        if (money["25"] === 0) {
          return "NO";
        } else {
          money["25"]--;
          money["50"]--;
        }
      }
    }
  }
  return "YES";
}
console.log(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 50, 100]));
