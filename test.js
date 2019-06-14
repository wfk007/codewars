function findNb(m) {
  let i = 1,
    cubeSum = 0;
  while (cubeSum < m) {
    cubeSum += Math.pow(i, 3);
    i++;
  }
  return cubeSum === m ? i - 1 : -1;
}
console.log(findNb(1071225));
console.log(findNb(91716553919377));
