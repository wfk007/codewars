function tribonacci(signature, n) {
  //your code here
  if (n === 0) return [];
  for (let i = 3; i < n; i++) {
    signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3];
  }
  return signature.slice(0, n);
}
console.log(tribonacci([0.5,0.5,0.5],30));
