describe("Solution", function() {
  it("EncryptExampleTests", function() {
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(
      encrypt("This kata is very interesting!", 1),
      "hskt svr neetn!Ti aai eyitrsig"
    );
  });
});

describe("Solution", function() {
  it("DecryptExampleTests", function() {
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(
      decrypt("hskt svr neetn!Ti aai eyitrsig", 1),
      "This kata is very interesting!"
    );
  });
});

describe("Solution", function() {
  it("EncryptDecryptTest", function() {
    Test.assertEquals(
      decrypt(encrypt("Kobayashi-Maru-Test", 10), 10),
      "Kobayashi-Maru-Test"
    );
  });
});

describe("Solution", function() {
  it("Null or Empty", function() {
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 1), "");
    Test.assertEquals(encrypt(null, 1), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});

describe("Solution", function() {
  it("Random", function() {
    function myEncrypt(text, n) {
      if (text == null || text.length == 0 || n <= 0) {
        return text;
      }

      for (var x = 0; x < n; x++) {
        text =
          text
            .split("")
            .filter((o, i) => i % 2 != 0)
            .join("") +
          text
            .split("")
            .filter((o, i) => i % 2 == 0)
            .join("");
      }

      return text;
    }

    function myDecrypt(encryptedText, n) {
      if (encryptedText == null || encryptedText.length == 0 || n <= 0) {
        return encryptedText;
      }

      var decryptedText = encryptedText;

      while (n != 0) {
        var leftPart = decryptedText.substring(
          0,
          Math.floor(decryptedText.length / 2)
        );

        var rightPart = decryptedText.substring(
          Math.floor(decryptedText.length / 2)
        );

        var newText = "";
        for (var i = 0; i < decryptedText.length; i++) {
          newText +=
            i % 2 == 0
              ? rightPart[Math.floor(i / 2)]
              : leftPart[Math.floor(i / 2)];
        }

        decryptedText = newText;

        n--;
      }

      return decryptedText;
    }

    for (var i = 0; i < 20; i++) {
      var n = Math.floor(Math.random() * 10);
      var length = Math.floor(Math.random() * 69 + 1);
      var text = "";
      for (var t = 0; t < length; t++) {
        text += String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      }

      Test.assertEquals(encrypt(text, n), myEncrypt(text, n));
      Test.assertEquals(decrypt(text, n), myDecrypt(text, n));
    }
  });
});
