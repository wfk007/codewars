function comp(array1, array2) {
  //your code here
  if (!array1 || !array2) return false;
  const pow1 = array1.map(v => Math.pow(v, 2));
  return array2.every(
    v => pow1.indexOf(v) !== -1 && pow1.splice(pow1.indexOf(v), 1)
  );
}
a = [2, 2, 3];
b = [4, 9, 9];
console.log(comp(a, b));
