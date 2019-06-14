Test.describe("validatePIN", function() {
  Test.it(
    "should return False for pins with length other than 4 or 6",
    function() {
      Test.assertEquals(validatePIN("1"), false, "Wrong output for '1'");
      Test.assertEquals(validatePIN("12"), false, "Wrong output for '12'");
      Test.assertEquals(validatePIN("123"), false, "Wrong output for '123'");
      Test.assertEquals(
        validatePIN("12345"),
        false,
        "Wrong output for '12345'"
      );
      Test.assertEquals(
        validatePIN("1234567"),
        false,
        "Wrong output for '1234567'"
      );
      Test.assertEquals(
        validatePIN("-1234"),
        false,
        "Wrong output for '-1234'"
      );
      Test.assertEquals(
        validatePIN("-12345"),
        false,
        "Wrong output for '-12345'"
      );
      Test.assertEquals(
        validatePIN("1.234"),
        false,
        "Wrong output for '1.234'"
      );
      Test.assertEquals(
        validatePIN("00000000"),
        false,
        "Wrong output for '00000000'"
      );
    }
  );

  Test.it(
    "should return False for pins which contain characters other than digits",
    function() {
      Test.assertEquals(validatePIN("a234"), false, "Wrong output for 'a234'");
      Test.assertEquals(validatePIN(".234"), false, "Wrong output for '.234'");
    }
  );

  Test.it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"), true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"), true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"), true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"), true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"), true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"), true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"), true, "Wrong output for '090909'");
  });

  Test.it("should handle all edge cases", function() {
    const tests = [
      "",
      "123",
      "12345",
      "1234567",
      "1234567890",
      "1234x",
      "123456x",
      "12.0",
      "1234.0",
      "123456.0",
      "123\n",
      "1234\n",
      "09876\n",
      "098765\n",
      "-111",
      "111-",
      "-44444",
      "44444-",
      "+111",
      "+88888",
      "+1111",
      "-2018",
      "+234567",
      "-234567",
      "123/",
      "456:",
      "9¾9¾"
    ];
    for (let s of tests)
      Test.assertEquals(validatePIN(s), false, `Wrong output for '${s}'`);
  });

  Test.it("should work with random input", function() {
    const randint = (a, b) => ~~(Math.random() * (b - a + 1)) + a;
    const randValidPin = () => {
      const length = Math.random() < 0.5 ? 4 : 6;
      const digits = "0123456789";
      return Array.from(
        { length: length },
        () => digits[randint(0, digits.length - 1)]
      );
    };
    const solution = pin => /^\d{4}$|^\d{6}$/.test(pin);

    for (let i = 0; i < 50; ++i) {
      let pin = randValidPin();
      if (Math.random() < 0.5)
        pin[randint(0, pin.length - 1)] =
          Math.random() < 0.5 ? String.fromCharCode(randint(32, 127)) : ".";
      pin = pin.join("");

      Test.assertEquals(
        validatePIN(pin),
        solution(pin),
        `Wrong output for '${pin}'`
      );
    }
  });
});
