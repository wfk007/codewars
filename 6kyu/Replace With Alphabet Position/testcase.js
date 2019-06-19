function ap(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function(l) {
      return /[a-z]/.test(l);
    })
    .map(function(l) {
      return l.charCodeAt() - 96;
    })
    .join(" ");
}

function randomChar() {
  var chars =
      "abcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];,./{}:|<>? ",
    rand = Math.floor(Math.random() * chars.length);
  return chars[rand];
}

describe("Replace with alphabet position", () => {
  it("Fixed tests:", () => {
    for (var i = 65; i <= 122; i++) {
      var letter = String.fromCharCode(i);
      Test.assertEquals(alphabetPosition(letter), ap(letter));
    }
    Test.assertEquals(alphabetPosition("-.-'"), "");
  });
});
describe("Randomly generated tests:", () => {
  for (var i = 0; i < 50; i++) {
    var x = "";
    for (var j = 0; j < 8; j++) {
      x += randomChar();
    }
    it(`Testing "${x}"`, () => Test.assertEquals(alphabetPosition(x), ap(x)));
  }
});
