function testAndPrint(got, expected) {
  if (got === expected) {
    Test.expect(true);
  } else {
    Test.expect(false, "Got '" + got + "', expected '" + expected + "'");
  }
}

Test.describe("Example from description", function() {
  testAndPrint(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
});

Test.describe("Basic Morse decoding", function() {
  testAndPrint(decodeMorse(".-"), "A");
  testAndPrint(decodeMorse("."), "E");
  testAndPrint(decodeMorse(".."), "I");
  testAndPrint(decodeMorse(". ."), "EE");
  testAndPrint(decodeMorse(".   ."), "E E");
  testAndPrint(decodeMorse("...---..."), "SOS");
  testAndPrint(decodeMorse("... --- ..."), "SOS");
  testAndPrint(decodeMorse("...   ---   ..."), "S O S");
});

Test.describe("More complex tests", function() {
  testAndPrint(decodeMorse(" . "), "E");
  testAndPrint(decodeMorse("   .   . "), "E E");
  testAndPrint(
    decodeMorse(
      "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
    ),
    "SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
  );
});
