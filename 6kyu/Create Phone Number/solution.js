function createPhoneNumber(numbers) {
  let numberStr = numbers.join("");
  return `(${numberStr.slice(0, 3)}) ${numberStr.slice(3, 6)}-${numberStr.slice(
    6
  )}`;
}
