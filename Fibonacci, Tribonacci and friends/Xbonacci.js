function Xbonacci(signature, n) {
  //your code here
  if (signature.length >= n) return signature.slice(0, n);
  let step = signature.length,
    i = 0;
  while (signature.length < n) {
    signature.push(signature.slice(i, i + step).reduce((a, b) => a + b));
    i++;
  }
  return signature;
}
console.log(Xbonacci([0, 1], 10));
console.log(Xbonacci([1, 1], 10));
console.log(Xbonacci([0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20));
