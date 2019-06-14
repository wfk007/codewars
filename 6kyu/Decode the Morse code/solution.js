const decodeMorse = function(morseCode) {
  //your code here
  return morseCode
    .trim()
    .split("   ")
    .map(w =>
      w
        .split(" ")
        .map(c => MORSE_CODE[c])
        .join("")
    )
    .join(" ");
};
