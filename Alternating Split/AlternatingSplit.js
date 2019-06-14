function encrypt(text, n) {
  if (!text || n <= 0) return text;
  let arr = text.split("");
  for (let i = 0; i < n; i++) {
    arr = arr
      .filter((element, index) => index % 2 !== 0)
      .concat(arr.filter((element, index) => index % 2 === 0));
  }
  return arr.join("");
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  let arr = encryptedText.split("");
  for (let j = 0; j < n; j++) {
    let currentArr = [];
    let even = arr.slice(0, Math.floor(arr.length / 2));
    let odd = arr.slice(Math.floor(arr.length / 2), arr.length);
    for (var i = 0; i < even.length && i < odd.length; i++) {
      currentArr.push(odd[i]);
      currentArr.push(even[i]);
    }
    if (i < even.length) {
      currentArr.push(even[i]);
    }
    if (i < odd.length) {
      currentArr.push(odd[i]);
    }
    arr = currentArr;
  }
  return arr.join("");
}
console.log(decrypt("s eT ashi tist!", 2));
