describe("KataTests", function() {
  it("exampleTests", function() {
    Test.assertEquals(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
    Test.assertEquals(findMissingLetter(["O", "Q", "R", "S"]), "P");
  });
  it("randomTest", function() {
    for (var r = 0; r < 30; r++) {
      var len = Math.floor(Math.random() * 7 + 3);
      var missingIdx = Math.floor(Math.random() * (len - 2) + 1);
      var start = Math.floor(Math.random() * (90 - len - 65) + 65);

      if (Math.random() > 0.5) {
        start += 32;
      }

      var missing = String.fromCharCode(start + missingIdx);
      var array = [];

      for (var i = 0; i < len; i++) {
        if (i != missingIdx) {
          array.push(String.fromCharCode(start + i));
        }
      }

      console.log("Array: " + array.join(","));

      Test.assertEquals(findMissingLetter(array), missing);
    }
  });
});
