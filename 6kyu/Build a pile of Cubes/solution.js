function findNb(m) {
  // your code
  let sum = 0,
    i = 0;
  while (sum < m) {
    i++;
    sum += Math.pow(i, 3);
  }
  return sum === m ? i : -1;
}
console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));
